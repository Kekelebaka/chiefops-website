// Database utilities for Cloudflare D1
// These are client-side utilities for when you need to access D1 from the edge

import { D1Database } from '@cloudflare/workers-types';

export interface Audit {
  id: number;
  business_name: string;
  email: string;
  phone?: string;
  industry?: string;
  website_url?: string;
  form_type: string;
  pain_point: string;
  form_data: string;
  created_at: string;
}

export interface Email {
  id: number;
  from_email: string;
  to_email: string;
  subject: string;
  body: string;
  html_body?: string;
  headers?: string;
  received_at: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

// In a real implementation, you would use these types with D1Database
// For Next.js (client-side), you would typically create API routes that call Workers
// which then access D1

export async function getAudits(db: D1Database): Promise<Audit[]> {
  const { results } = await db.prepare('SELECT * FROM audits ORDER BY created_at DESC').all();
  return results as unknown as Audit[];
}

export async function getAuditById(id: number, db: D1Database): Promise<Audit | null> {
  const { results } = await db.prepare('SELECT * FROM audits WHERE id = ?').bind(id).all();
  return (results[0] || null) as unknown as Audit | null;
}

export async function createAudit(audit: Omit<Audit, 'id' | 'created_at'>, db: D1Database): Promise<number> {
  const { success } = await db.prepare(`
    INSERT INTO audits (business_name, email, phone, industry, website_url, form_type, pain_point, form_data)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    audit.business_name,
    audit.email,
    audit.phone,
    audit.industry,
    audit.website_url,
    audit.form_type,
    audit.pain_point,
    audit.form_data
  ).run();
  
  if (success) {
    const { results } = await db.prepare('SELECT last_insert_rowid() as id').all();
    return (results[0] as any)?.id || 0;
  }
  
  throw new Error('Failed to create audit');
}

export async function getFAQs(db: D1Database): Promise<FAQ[]> {
  const { results } = await db.prepare('SELECT * FROM faqs ORDER BY category, question').all();
  return results as unknown as FAQ[];
}

export async function getFAQByCategory(category: string, db: D1Database): Promise<FAQ[]> {
  const { results } = await db.prepare('SELECT * FROM faqs WHERE category = ? ORDER BY question').bind(category).all();
  return results as unknown as FAQ[];
}

export async function getEmails(db: D1Database, limit: number = 100): Promise<Email[]> {
  const { results } = await db.prepare('SELECT * FROM emails ORDER BY received_at DESC LIMIT ?').bind(limit).all();
  return results as unknown as Email[];
}

// Database schema for reference
export const DATABASE_SCHEMA = `
-- Audits table
CREATE TABLE IF NOT EXISTS audits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  business_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  industry TEXT,
  website_url TEXT,
  form_type TEXT NOT NULL DEFAULT 'general_inquiry',
  pain_point TEXT,
  form_data TEXT,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Emails table
CREATE TABLE IF NOT EXISTS emails (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  from_email TEXT NOT NULL,
  to_email TEXT NOT NULL,
  subject TEXT NOT NULL,
  body TEXT NOT NULL,
  html_body TEXT,
  headers TEXT,
  received_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- FAQ table
CREATE TABLE IF NOT EXISTS faqs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'General'
);

-- Employees table (for payslip system)
CREATE TABLE IF NOT EXISTS employees (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  employee_number TEXT UNIQUE,
  department TEXT,
  position TEXT,
  bank_name TEXT,
  account_number TEXT,
  branch_code TEXT,
  active INTEGER NOT NULL DEFAULT 1
);

-- Payroll data table
CREATE TABLE IF NOT EXISTS payroll_data (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  employee_id TEXT NOT NULL,
  period TEXT NOT NULL,
  earnings TEXT NOT NULL,
  deductions TEXT NOT NULL,
  leave TEXT NOT NULL,
  FOREIGN KEY (employee_id) REFERENCES employees(id),
  UNIQUE(employee_id, period)
);

-- Payslips table
CREATE TABLE IF NOT EXISTS payslips (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  employee_id TEXT NOT NULL,
  period TEXT NOT NULL,
  payment_date TEXT NOT NULL,
  total_earnings REAL NOT NULL,
  total_deductions REAL NOT NULL,
  net_salary REAL NOT NULL,
  pdf_url TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  sent_at DATETIME,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (employee_id) REFERENCES employees(id),
  UNIQUE(employee_id, period)
);

-- Solutions table (for CMS-like functionality)
CREATE TABLE IF NOT EXISTS solutions (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  features TEXT,
  benefits TEXT,
  price TEXT,
  icon TEXT,
  color TEXT,
  category TEXT NOT NULL DEFAULT 'website',
  sort_order INTEGER NOT NULL DEFAULT 0,
  active INTEGER NOT NULL DEFAULT 1
);
`;
