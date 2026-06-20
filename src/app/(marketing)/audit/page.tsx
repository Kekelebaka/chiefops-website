import type { Metadata } from 'next';
import AuditForm from './AuditForm';

export const metadata: Metadata = {
  title: 'Get a Free ChiefOps Audit — Website, Funnel, Automation & AI',
  description: 'Request your free ChiefOps business-systems audit. We analyse your website, funnel, admin, documents and AI-readiness, then show what to fix first.',
  alternates: { canonical: 'https://chiefops.co.za/audit' },
};

export default function AuditPage() {
  return <AuditForm />;
}
