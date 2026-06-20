import type { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'ChiefOps Pricing — ZAR & USD Packages (Audit, Build, Retainer)',
  description: 'Transparent ChiefOps pricing in ZAR and USD. Audits from free, builds from R3,500, retainers from R750/mo. Every build starts with an audit.',
  alternates: { canonical: 'https://chiefops.co.za/pricing' },
};

export default function PricingPage() {
  return <PricingClient />;
}
