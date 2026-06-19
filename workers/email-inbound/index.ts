// Cloudflare Worker for Inbound Email Processing
// This worker processes emails sent to your Cloudflare Email Routing addresses

export interface Env {
  DB: D1Database;
  R2: R2Bucket;
  EMAIL_API_TOKEN: string;
  ADMIN_EMAIL: string;
}

interface EmailMessage {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
  headers: Record<string, string>;
  attachments: Array<{
    filename: string;
    content: string;
    contentType: string;
  }>;
}

interface EmailSendOptions {
  to: string | string[];
  from: string;
  subject: string;
  body: string;
  html?: string;
}

// Main email handler
export default {
  async email(message: EmailMessage, env: Env, ctx: ExecutionContext): Promise<void> {
    const { from, to, subject, text, html, headers, attachments } = message;

    console.log(`Processing email from ${from} to ${to}`);

    try {
      // 1. Store the email in D1 database
      await storeEmail(message, env.DB);

      // 2. Check if this is an FAQ match
      const faqAnswer = await getFAQAnswer(subject, text, env.DB);
      
      if (faqAnswer) {
        // Auto-reply with FAQ answer
        await sendEmail({
          to: from,
          from: 'info@chiefops.co.za',
          subject: `Re: ${subject}`,
          body: faqAnswer,
        }, env);
        
        console.log(`Auto-replied to FAQ: ${subject}`);
        return;
      }

      // 3. Check if this is a form submission (audit request, contact form, etc.)
      const isFormSubmission = subject.toLowerCase().includes('audit request') ||
                                subject.toLowerCase().includes('contact form') ||
                                subject.toLowerCase().includes('website inquiry');

      if (isFormSubmission) {
        // Parse form data from email body
        const formData = parseFormSubmission(text);
        
        if (formData) {
          await storeFormSubmission(formData, env.DB);
          
          // Send confirmation email
          await sendConfirmationEmail(from, formData.type || 'inquiry', env);
          
          console.log(`Processed form submission: ${formData.type}`);
          return;
        }
      }

      // 4. Forward to admin with additional context
      await forwardToAdmin(message, env);

    } catch (error) {
      console.error('Error processing email:', error);
      // Even if we fail, we should still forward to admin
      await forwardToAdmin(message, env);
    }
  },
};

// Store email in D1 database
async function storeEmail(message: EmailMessage, db: D1Database): Promise<void> {
  const { from, to, subject, text, html, headers } = message;
  
  const timestamp = new Date().toISOString();
  
  await db.prepare(`
    INSERT INTO emails (from_email, to_email, subject, body, html_body, headers, received_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(
    from,
    to,
    subject,
    text,
    html,
    JSON.stringify(headers),
    timestamp
  ).run();
}

// Check for FAQ match
async function getFAQAnswer(subject: string, text: string, db: D1Database): Promise<string | null> {
  try {
    // Search for FAQ matches in subject or body
    const lowerSubject = subject.toLowerCase();
    const lowerText = text.toLowerCase();
    
    const { results } = await db.prepare(`
      SELECT question, answer FROM faqs 
      WHERE LOWER(question) LIKE ? OR LOWER(answer) LIKE ?
      LIMIT 1
    `).bind(`%${lowerSubject}%`, `%${lowerText}%`).all();
    
    if (results && results.length > 0) {
      return results[0].answer as string;
    }
    
    return null;
  } catch (error) {
    console.error('Error checking FAQ:', error);
    return null;
  }
}

// Parse form submission from email
function parseFormSubmission(text: string): Record<string, any> | null {
  try {
    // Look for key-value pairs in the email body
    const lines = text.split('\n');
    const formData: Record<string, any> = {};
    
    for (const line of lines) {
      const colonIndex = line.indexOf(':');
      if (colonIndex > 0) {
        const key = line.substring(0, colonIndex).trim();
        const value = line.substring(colonIndex + 1).trim();
        
        if (key && value) {
          formData[key] = value;
          
          // Try to detect form type
          if (key.toLowerCase().includes('audit')) {
            formData.type = 'audit_request';
          } else if (key.toLowerCase().includes('contact')) {
            formData.type = 'contact_form';
          }
        }
      }
    }
    
    return Object.keys(formData).length > 0 ? formData : null;
  } catch (error) {
    console.error('Error parsing form submission:', error);
    return null;
  }
}

// Store form submission in database
async function storeFormSubmission(formData: Record<string, any>, db: D1Database): Promise<void> {
  const timestamp = new Date().toISOString();
  
  const businessName = formData.businessName || formData.name || 'Unknown';
  const email = formData.email || formData.from || 'Unknown';
  const formType = formData.type || 'general_inquiry';
  const painPoint = formData.biggestPainPoint || formData.message || '';
  
  await db.prepare(`
    INSERT INTO audits (business_name, email, form_type, pain_point, form_data, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `).bind(
    businessName,
    email,
    formType,
    painPoint,
    JSON.stringify(formData),
    timestamp
  ).run();
}

// Send confirmation email
async function sendConfirmationEmail(to: string, formType: string, env: Env): Promise<void> {
  const subjectMap = {
    audit_request: 'Your ChiefOps Audit Request Has Been Received',
    contact_form: 'Thank You for Contacting ChiefOps',
    general_inquiry: 'Thank You for Your Inquiry',
  };
  
  const bodyMap = {
    audit_request: `Thank you for requesting a ChiefOps audit!

We've received your information and will review it shortly. Our team will get back to you within 24-48 hours to schedule your free consultation.

In the meantime, feel free to explore our website to learn more about how we can help your business.

Best regards,
The ChiefOps Team`,
    contact_form: `Thank you for contacting ChiefOps!

We've received your message and will get back to you as soon as possible, typically within 24-48 hours.

If your matter is urgent, you can also reach us at info@chiefops.co.za.

Best regards,
The ChiefOps Team`,
    general_inquiry: `Thank you for your interest in ChiefOps!

We've received your inquiry and will review it shortly. Someone from our team will be in touch with you soon.

Best regards,
The ChiefOps Team`,
  };
  
  await sendEmail({
    to,
    from: 'info@chiefops.co.za',
    subject: subjectMap[formType as keyof typeof subjectMap] || subjectMap.general_inquiry,
    body: bodyMap[formType as keyof typeof bodyMap] || bodyMap.general_inquiry,
  }, env);
}

// Forward to admin
async function forwardToAdmin(message: EmailMessage, env: Env): Promise<void> {
  const { from, to, subject, text, html, headers } = message;
  
  const adminBody = `
---
ORIGINAL EMAIL DETAILS
---
From: ${from}
To: ${to}
Subject: ${subject}
Received: ${new Date().toISOString()}

---
EMAIL BODY
---
${text}

${html ? `---
HTML BODY
---
${html}` : ''}

---
HEADERS
---
${JSON.stringify(headers, null, 2)}
`;

  await sendEmail({
    to: env.ADMIN_EMAIL || 'admin@chiefops.co.za',
    from: 'forwarder@chiefops.co.za',
    subject: `[ChiefOps] ${subject}`,
    body: adminBody,
  }, env);
}

// Send email function (placeholder - implement based on your email service)
async function sendEmail(options: EmailSendOptions, env: Env): Promise<void> {
  // This is a placeholder implementation
  // In production, you would integrate with:
  // 1. Cloudflare Email Service (when available)
  // 2. A third-party email service (SendGrid, Mailgun, etc.)
  // 3. Direct SMTP connection
  
  console.log(`Sending email to ${options.to} from ${options.from}`);
  console.log(`Subject: ${options.subject}`);
  
  // For now, we'll just log the email
  // In production, uncomment and implement the actual email sending logic
  
  /*
  // Example using Cloudflare Email Service (when available)
  const response = await fetch('https://api.cloudflare.com/client/v4/accounts/.../email/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.EMAIL_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: options.to,
      from: options.from,
      subject: options.subject,
      text: options.body,
      html: options.html,
    }),
  });
  
  if (!response.ok) {
    throw new Error(`Email send failed: ${response.statusText}`);
  }
  */
}
