export type PriceTier = 'free' | 'audit' | 'build' | 'retain';

export interface PricingItem {
  name: string;
  subtitle?: string;
  priceZAR: string;
  priceUSD: string;
  description: string;
  tier: PriceTier;
  popular?: boolean;
  features?: string[];
  cta?: string;
  href?: string;
}

export const pricingData: PricingItem[] = [
  // ── AUDIT OPS ──
  {
    name: 'Free Scan',
    priceZAR: 'Free',
    priceUSD: 'Free',
    description: 'Automated quick audit — your lead magnet.',
    tier: 'free',
    cta: 'Get a ChiefOps Audit',
    href: '/audit',
  },
  {
    name: 'Premium Audit',
    priceZAR: 'R1,500',
    priceUSD: '$89',
    description: 'Manual deep audit + prioritised recommendations.',
    tier: 'audit',
    cta: 'Get a ChiefOps Audit',
    href: '/audit',
  },
  {
    name: 'Full Ops Audit',
    priceZAR: 'R5,000',
    priceUSD: '$279',
    description: 'Full digital-operations audit + roadmap. Credited back if you build.',
    tier: 'audit',
    cta: 'Get a ChiefOps Audit',
    href: '/audit',
  },

  // ── BUILD OPS (one-time) ──
  {
    name: 'LaunchOps',
    subtitle: 'For: Look professional online',
    priceZAR: 'R3,500',
    priceUSD: '$199',
    description: 'Website, brand basics, domain & email.',
    tier: 'build',
    features: ['Website', 'Brand basics', 'Domain & email', 'Mobile-first'],
    cta: 'Get a ChiefOps Audit',
    href: '/audit',
  },
  {
    name: 'FunnelOps',
    subtitle: 'For: Get more leads & conversions',
    priceZAR: 'R6,500',
    priceUSD: '$349',
    description: 'Landing pages, lead capture, WhatsApp flow, follow-up sequences.',
    tier: 'build',
    popular: true,
    features: [
      'Conversion landing pages',
      'Lead capture forms',
      'WhatsApp lead flow',
      'Follow-up messages',
      'Analytics',
    ],
    cta: 'Get a ChiefOps Audit',
    href: '/audit',
  },
  {
    name: 'AutomateOps',
    subtitle: 'For: Kill manual admin & documents',
    priceZAR: 'R8,500',
    priceUSD: '$459',
    description: 'Quote/invoice workflows, client forms, email & WhatsApp flows.',
    tier: 'build',
    features: [
      'Quote / invoice generation',
      'Client intake forms',
      'Email & WhatsApp flows',
      'Reminders & reports',
    ],
    cta: 'Get a ChiefOps Audit',
    href: '/audit',
  },
  {
    name: 'AI-Ops',
    subtitle: 'For: Add AI to the business',
    priceZAR: 'R9,500',
    priceUSD: '$499',
    description: 'AI-ready content structure, assistants, content & enquiry workflows.',
    tier: 'build',
    features: [
      'AI-ready content structure',
      'Chatbot / assistant',
      'Content workflows',
      'Drafting & summarisation',
    ],
    cta: 'Get a ChiefOps Audit',
    href: '/audit',
  },
  {
    name: 'SystemOps',
    subtitle: 'For: Portals, dashboards, logins',
    priceZAR: 'R12,500',
    priceUSD: '$699',
    description: 'Client/staff portals, role-based access, document upload/download.',
    tier: 'build',
    features: [
      'Client portal',
      'Staff dashboard',
      'Role-based access',
      'Document management',
      'Notifications',
    ],
    cta: 'Get a ChiefOps Audit',
    href: '/audit',
  },

  // ── RETAIN OPS (monthly) ──
  {
    name: 'CareOps',
    priceZAR: 'R750/mo',
    priceUSD: '$49/mo',
    description: 'Hosting, updates, backups, support.',
    tier: 'retain',
    features: ['Hosting', 'Updates', 'Backups', 'Support'],
    cta: 'Get a ChiefOps Audit',
    href: '/audit',
  },
  {
    name: 'GrowthOps',
    priceZAR: 'R2,500/mo',
    priceUSD: '$149/mo',
    description: 'Care + content + optimisation.',
    tier: 'retain',
    features: ['Everything in CareOps', 'Content updates', 'SEO optimisation', 'Monthly reports'],
    cta: 'Get a ChiefOps Audit',
    href: '/audit',
  },
  {
    name: 'ScaleOps',
    priceZAR: 'R7,500/mo',
    priceUSD: '$419/mo',
    description: 'Growth + automation + AI ops.',
    tier: 'retain',
    features: [
      'Everything in GrowthOps',
      'Automation workflows',
      'AI integrations',
      'Priority support',
    ],
    cta: 'Get a ChiefOps Audit',
    href: '/audit',
  },
  {
    name: 'Fractional TechOps Partner',
    priceZAR: 'R15,000/mo',
    priceUSD: '$849/mo',
    description: 'Embedded tech leg for the business.',
    tier: 'retain',
    features: [
      'Dedicated tech partner',
      'Full system management',
      'Strategic planning',
      'Team training',
      'Unlimited support',
    ],
    cta: 'Get a ChiefOps Audit',
    href: '/audit',
  },
];

export const groups = {
  audit: { label: 'AUDIT OPS', subtitle: 'Find out what to fix first' },
  build: { label: 'BUILD OPS', subtitle: 'One-time builds — prices from' },
  retain: { label: 'RETAIN OPS', subtitle: 'Monthly care plans — prices from' },
};
