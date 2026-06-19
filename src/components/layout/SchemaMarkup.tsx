'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

const PHONE_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '27761966009';
const PHONE_DISPLAY = process.env.NEXT_PUBLIC_PHONE_DISPLAY || '+27 76 196 6009';
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@chiefops.co.za';
const SITE_URL = 'https://chiefops.co.za';

const serviceSchema = {
  '@type': 'Service',
  name: 'ChiefOps Business Operating Systems',
  provider: {
    '@type': 'Organization',
    name: 'ChiefOps',
    url: SITE_URL,
    telephone: `+${PHONE_NUMBER}`,
    email: CONTACT_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ZA',
    },
  },
  areaServed: { '@type': 'Country', name: 'South Africa' },
  priceRange: 'ZAR 1,500 – ZAR 15,000+',
  description:
    'AI-powered business operating systems: websites, sales funnels, client portals, automations, and branded documents.',
};

const pageSchemas: Record<string, { webPage: Record<string, any>; additional?: Record<string, any> }> = {
  '/': {
    webPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: 'ChiefOps | AI-Powered Business Operating Systems',
      description:
        'ChiefOps builds AI-ready websites, sales funnels, client portals, automations and branded documents.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
  },
  '/audit': {
    webPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/audit/#webpage`,
      url: `${SITE_URL}/audit`,
      name: 'Get a ChiefOps Audit — Free Business Operating System Assessment',
      description: 'Free audit to identify what to fix first in your business systems.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
  },
  '/solutions': {
    webPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/solutions/#webpage`,
      url: `${SITE_URL}/solutions`,
      name: 'ChiefOps Solutions — Six Systems to Run Your Business on',
      description: 'Six systems: Client Growth, Business Presence, Admin Automation, Portals, Documents, AI.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
  },
  '/pricing': {
    webPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/pricing/#webpage`,
      url: `${SITE_URL}/pricing`,
      name: 'ChiefOps Pricing — ZAR / USD Offer Ladder',
      description:
        'AuditOps (Free–R5,000), BuildOps (R3,500–R12,500), RetainOps (R750–R15,000/mo).',
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
  },
  '/about': {
    webPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/about/#webpage`,
      url: `${SITE_URL}/about`,
      name: 'About ChiefOps — South African Business Operating Systems',
      description: 'About ChiefOps: the who, why, and how behind AI-powered business operating systems.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
  },
  '/contact': {
    webPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/contact/#webpage`,
      url: `${SITE_URL}/contact`,
      name: 'Contact ChiefOps — WhatsApp, Email, or Audit Request',
      description: 'Contact ChiefOps via WhatsApp, email, or the audit form.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
  },
  '/architecture': {
    webPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/architecture/#webpage`,
      url: `${SITE_URL}/architecture`,
      name: 'ChiefOps Tech Stack — Cloudflare, Next.js, AI-Ready Architecture',
      description: 'Cloudflare Pages, Workers, D1, R2, Resend, Turnstile — serverless-first.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
  },
};

export function SchemaMarkup() {
  const pathname = usePathname();

  const baseGraph: Array<Record<string, any>> = [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: 'ChiefOps',
      url: SITE_URL,
      telephone: PHONE_NUMBER,
      email: CONTACT_EMAIL,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'ZA',
      },
      areaServed: { '@type': 'Country', name: 'South Africa' },
      priceRange: 'ZAR 1,500 – ZAR 15,000+',
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'ChiefOps',
      url: SITE_URL,
      logo: `${SITE_URL}/logo-chiefops.png`,
      description:
        'AI-Powered Business Operating Systems — Turn attention into leads, leads into clients, and clients into long-term revenue.',
      foundingDate: '2024',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'South Africa',
        addressCountry: 'ZA',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: PHONE_NUMBER,
        contactType: 'Customer Service',
        email: CONTACT_EMAIL,
      },
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'ChiefOps',
      description: 'AI-Powered Business Operating Systems',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    serviceSchema,
  ];

  // Get page-specific schema
  const pageSchema = pageSchemas[pathname as keyof typeof pageSchemas];
  const webPageSchema = pageSchema ? pageSchema.webPage : pageSchemas['/']!.webPage;
  const additionalSchema = pageSchema ? pageSchema.additional : undefined;

  // Breadcrumb
  const breadcrumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
  ];
  if (pathname && pathname !== '/') {
    const parts = pathname.split('/').filter(Boolean);
    parts.forEach((part, i) => {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: i + 2,
        name: part.charAt(0).toUpperCase() + part.slice(1),
        item: `${SITE_URL}/${parts.slice(0, i + 1).join('/')}`,
      });
    });
  }

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}/#breadcrumb`,
    itemListElement: breadcrumbItems,
  };

  const graph = [
    ...baseGraph,
    webPageSchema,
    breadcrumbSchema,
  ];

  if (additionalSchema) {
    graph.push(additionalSchema);
  }

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': graph,
        }),
      }}
    />
  );
}
