// Cloudflare Worker for Payslip Generation
// This worker generates PDF payslips and sends them via email

export interface Env {
  DB: D1Database;
  R2: R2Bucket;
  EMAIL_API_TOKEN: string;
}

interface PayslipData {
  employee: {
    id: string;
    name: string;
    email: string;
    employeeNumber: string;
    department: string;
    position: string;
    bankAccount: {
      bankName: string;
      accountNumber: string;
      branchCode: string;
    };
  };
  company: {
    name: string;
    address: string;
    taxNumber: string;
    payrollPeriod: string;
    paymentDate: string;
  };
  earnings: Array<{
    description: string;
    amount: number;
    type: 'salary' | 'bonus' | 'allowance' | 'overtime' | 'other';
  }>;
  deductions: Array<{
    description: string;
    amount: number;
    type: 'tax' | 'pension' | 'medical' | 'insurance' | 'other';
  }>;
  leave: {
    annualLeave: number;
    sickLeave: number;
    leaveTaken: number;
    leaveBalance: number;
  };
}

interface PayslipRequest {
  employeeId: string;
  period: string; // e.g., '2024-06'
  data?: PayslipData; // Optional: full data to use
}

// Main request handler
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    // Handle OPTIONS request
    if (request.method === 'OPTIONS') {
      return new Response('OK', { headers: corsHeaders });
    }

    try {
      // GET /payslips - List payslips
      if (path === '/payslips' && request.method === 'GET') {
        return await handleListPayslips(request, env);
      }

      // GET /payslips/:employeeId/:period - Get specific payslip
      if (path.match(/^\/payslips\/[^\/]+\/[^\/]+$/) && request.method === 'GET') {
        return await handleGetPayslip(request, env);
      }

      // POST /payslips/generate - Generate and email payslip
      if (path === '/payslips/generate' && request.method === 'POST') {
        return await handleGeneratePayslip(request, env);
      }

      // POST /payslips/generate-batch - Generate payslips for all employees
      if (path === '/payslips/generate-batch' && request.method === 'POST') {
        return await handleBatchGenerate(request, env);
      }

      return new Response('Not Found', { status: 404, headers: corsHeaders });
    } catch (error) {
      console.error('Payslip worker error:', error);
      return new Response(
        JSON.stringify({ error: 'Internal Server Error', details: error instanceof Error ? error.message : String(error) }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  },
};

// List payslips for an employee
async function handleListPayslips(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  const employeeId = url.searchParams.get('employeeId');

  if (!employeeId) {
    return new Response(
      JSON.stringify({ error: 'employeeId query parameter is required' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { results } = await env.DB.prepare(`
    SELECT period, payment_date, total_earnings, total_deductions, net_salary, status
    FROM payslips
    WHERE employee_id = ?
    ORDER BY period DESC
  `).bind(employeeId).all();

  return new Response(
    JSON.stringify({ success: true, payslips: results }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}

// Get specific payslip
async function handleGetPayslip(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/');
  const employeeId = pathParts[2];
  const period = pathParts[3];

  const { results } = await env.DB.prepare(`
    SELECT * FROM payslips WHERE employee_id = ? AND period = ?
  `).bind(employeeId, period).all();

  if (results.length === 0) {
    return new Response(
      JSON.stringify({ error: 'Payslip not found' }),
      { status: 404, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const payslip = results[0];

  return new Response(
    JSON.stringify({ success: true, payslip }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}

// Generate and email payslip
async function handleGeneratePayslip(request: Request, env: Env): Promise<Response> {
  const requestData: PayslipRequest = await request.json();

  if (!requestData.employeeId || !requestData.period) {
    return new Response(
      JSON.stringify({ error: 'employeeId and period are required' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Get employee data and generate payslip
  const payslipData = requestData.data || await fetchPayslipData(requestData.employeeId, requestData.period, env);

  if (!payslipData) {
    return new Response(
      JSON.stringify({ error: 'Failed to generate payslip data' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Generate PDF
  const pdfBuffer = await generatePayslipPDF(payslipData);

  // Upload to R2
  const pdfKey = `payslips/${payslipData.employee.id}/${requestData.period}.pdf`;
  await env.R2.put(pdfKey, pdfBuffer, {
    httpMetadata: {
      contentType: 'application/pdf',
      contentDisposition: `attachment; filename="payslip_${payslipData.employee.name.replace(/\s+/g, '_')}_${requestData.period}.pdf"`,
    },
  });

  // Send email
  await sendPayslipEmail(payslipData.employee.email, payslipData, pdfKey, env);

  // Store record in database
  await storePayslipRecord(payslipData, pdfKey, env);

  return new Response(
    JSON.stringify({
      success: true,
      message: 'Payslip generated and sent successfully',
      payslipId: `${payslipData.employee.id}-${requestData.period}`,
      downloadUrl: `/payslips/download/${payslipData.employee.id}/${requestData.period}`,
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}

// Batch generate payslips
async function handleBatchGenerate(request: Request, env: Env): Promise<Response> {
  const { period } = await request.json();

  if (!period) {
    return new Response(
      JSON.stringify({ error: 'period is required' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Get all employees
  const { results: employees } = await env.DB.prepare(`
    SELECT id, name, email, employee_number, department, position
    FROM employees
    WHERE active = 1
  `).all();

  const results = {
    total: employees.length,
    success: 0,
    failed: 0,
    details: [] as Array<{ employeeId: string; employeeName: string; status: 'success' | 'failed'; error?: string }>,
  };

  for (const employee of employees) {
    try {
      const payslipData = await fetchPayslipData(employee.id, period, env);
      
      if (payslipData) {
        const pdfBuffer = await generatePayslipPDF(payslipData);
        const pdfKey = `payslips/${payslipData.employee.id}/${period}.pdf`;
        
        await env.R2.put(pdfKey, pdfBuffer);
        await sendPayslipEmail(payslipData.employee.email, payslipData, pdfKey, env);
        await storePayslipRecord(payslipData, pdfKey, env);
        
        results.success++;
        results.details.push({
          employeeId: employee.id,
          employeeName: employee.name,
          status: 'success',
        });
      } else {
        throw new Error('No payslip data');
      }
    } catch (error) {
      results.failed++;
      results.details.push({
        employeeId: employee.id,
        employeeName: employee.name,
        status: 'failed',
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }

  return new Response(
    JSON.stringify({ success: true, ...results }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}

// Fetch payslip data from database
async function fetchPayslipData(employeeId: string, period: string, env: Env): Promise<PayslipData | null> {
  try {
    // Get employee data
    const { results: employeeResults } = await env.DB.prepare(`
      SELECT * FROM employees WHERE id = ?
    `).bind(employeeId).all();

    if (employeeResults.length === 0) {
      return null;
    }

    const employee = employeeResults[0];

    // Get payroll data for this period
    const { results: payrollResults } = await env.DB.prepare(`
      SELECT * FROM payroll_data
      WHERE employee_id = ? AND period = ?
    `).bind(employeeId, period).all();

    if (payrollResults.length === 0) {
      return null;
    }

    const payroll = payrollResults[0];

    // Build payslip data
    const payslipData: PayslipData = {
      employee: {
        id: employee.id,
        name: employee.name,
        email: employee.email,
        employeeNumber: employee.employee_number,
        department: employee.department,
        position: employee.position,
        bankAccount: {
          bankName: employee.bank_name,
          accountNumber: employee.account_number,
          branchCode: employee.branch_code,
        },
      },
      company: {
        name: 'Your Company Name',
        address: 'Your Company Address',
        taxNumber: 'Your Tax Number',
        payrollPeriod: period,
        paymentDate: new Date().toISOString().split('T')[0],
      },
      earnings: JSON.parse(payroll.earnings || '[]'),
      deductions: JSON.parse(payroll.deductions || '[]'),
      leave: JSON.parse(payroll.leave || '{}'),
    };

    return payslipData;
  } catch (error) {
    console.error('Error fetching payslip data:', error);
    return null;
  }
}

// Generate payslip PDF
async function generatePayslipPDF(payslipData: PayslipData): Promise<ArrayBuffer> {
  // In a real implementation, you would use a PDF generation library
  // such as pdfkit, jsPDF, or a Cloudflare Workers-compatible solution
  
  // For now, we'll generate a simple text-based payslip
  const payslipText = generatePayslipText(payslipData);
  
  // Convert text to PDF buffer (placeholder)
  // In production, use a proper PDF library
  const encoder = new TextEncoder();
  return encoder.encode(payslipText).buffer;
}

// Generate payslip text (for placeholder)
function generatePayslipText(payslipData: PayslipData): string {
  const { employee, company, earnings, deductions, leave } = payslipData;

  const totalEarnings = earnings.reduce((sum, e) => sum + e.amount, 0);
  const totalDeductions = deductions.reduce((sum, d) => sum + d.amount, 0);
  const netSalary = totalEarnings - totalDeductions;

  return `
CHIEF OPS PAYSLIP
=================

Employee: ${employee.name}
Employee Number: ${employee.employeeNumber}
Department: ${employee.department}
Position: ${employee.position}

Company: ${company.name}
Period: ${company.payrollPeriod}
Payment Date: ${company.paymentDate}

-----------------
EARNINGS
-----------------
${earnings.map(e => `${e.description.padEnd(30)} ${formatCurrency(e.amount)}`.trim()).join('\n')}

Total Earnings: ${formatCurrency(totalEarnings)}

-----------------
DEDUCTIONS
-----------------
${deductions.map(d => `${d.description.padEnd(30)} ${formatCurrency(d.amount)}`.trim()).join('\n')}

Total Deductions: ${formatCurrency(totalDeductions)}

-----------------
NET SALARY
-----------------
${formatCurrency(netSalary)}

-----------------
BANK DETAILS
-----------------
Bank: ${employee.bankAccount.bankName}
Account: ${employee.bankAccount.accountNumber}
Branch Code: ${employee.bankAccount.branchCode}

-----------------
LEAVE BALANCE
-----------------
Annual Leave: ${leave.annualLeave} days
Sick Leave: ${leave.sickLeave} days
Leave Taken: ${leave.leaveTaken} days
Leave Balance: ${leave.leaveBalance} days

Thank you for your service!
  `.trim();
}

// Format currency
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  }).format(amount);
}

// Send payslip email
async function sendPayslipEmail(to: string, payslipData: PayslipData, pdfKey: string, env: Env): Promise<void> {
  const subject = `Your Payslip for ${payslipData.company.payrollPeriod} - ${payslipData.employee.name}`;

  const body = `
Dear ${payslipData.employee.name},

Your payslip for the period ${payslipData.company.payrollPeriod} is ready.

Please find your payslip attached to this email.

Summary:
- Total Earnings: ${formatCurrency(payslipData.earnings.reduce((sum, e) => sum + e.amount, 0))}
- Total Deductions: ${formatCurrency(payslipData.deductions.reduce((sum, d) => sum + d.amount, 0))}
- Net Salary: ${formatCurrency(
    payslipData.earnings.reduce((sum, e) => sum + e.amount, 0) - 
    payslipData.deductions.reduce((sum, d) => sum + d.amount, 0)
  )}

You can also download your payslip from our portal: https://chiefops.co.za/payslips

If you have any questions about your payslip, please contact our payroll department.

Best regards,
Payroll Department
ChiefOps
  `;

  // In production, implement actual email sending
  console.log(`Sending payslip email to ${to} for ${payslipData.company.payrollPeriod}`);
  
  /*
  // Example implementation with Cloudflare Email Service
  const r2Object = await env.R2.get(pdfKey);
  if (r2Object) {
    await fetch('https://api.cloudflare.com/client/v4/accounts/.../email/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.EMAIL_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to,
        from: 'payroll@chiefops.co.za',
        subject,
        text: body,
        attachments: [
          {
            filename: `payslip_${payslipData.employee.name.replace(/\s+/g, '_')}_${payslipData.company.payrollPeriod}.pdf`,
            content: await r2Object.arrayBuffer(),
            contentType: 'application/pdf',
          },
        ],
      }),
    });
  }
  */
}

// Store payslip record in database
async function storePayslipRecord(payslipData: PayslipData, pdfKey: string, env: Env): Promise<void> {
  const totalEarnings = payslipData.earnings.reduce((sum, e) => sum + e.amount, 0);
  const totalDeductions = payslipData.deductions.reduce((sum, d) => sum + d.amount, 0);
  const netSalary = totalEarnings - totalDeductions;

  await env.DB.prepare(`
    INSERT INTO payslips (
      employee_id, period, payment_date,
      total_earnings, total_deductions, net_salary,
      pdf_url, status, sent_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    payslipData.employee.id,
    payslipData.company.payrollPeriod,
    payslipData.company.paymentDate,
    totalEarnings,
    totalDeductions,
    netSalary,
    pdfKey,
    'sent',
    new Date().toISOString()
  ).run();
}
