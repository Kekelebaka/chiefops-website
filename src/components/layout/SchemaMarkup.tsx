'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

export function SchemaMarkup() {
  const pathname = usePathname();

  const getSchemaMarkup = () => {
    const baseGraph: Array<Record<string, any>> = [
      {
        "@type": "Organization",
        "@id": "https://chiefops.co.za/#organization",
        "name": "ChiefOps",
        "url": "https://chiefops.co.za",
        "logo": "https://chiefops.co.za/favicon.ico",
        "description": "AI-Powered Business Operating Systems - Turn attention into leads, leads into clients, and clients into long-term revenue.",
        "foundingDate": "2024",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "South Africa",
          "addressCountry": "ZA"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+27-000-000-0000",
          "contactType": "Customer Service",
          "email": "info@chiefops.co.za"
        },
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://chiefops.co.za/#website",
        "url": "https://chiefops.co.za",
        "name": "ChiefOps",
        "description": "AI-Powered Business Operating Systems",
        "publisher": {"@id": "https://chiefops.co.za/#organization"},
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://chiefops.co.za/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ];

    const pageSpecificSchemas: Record<string, Record<string, any>> = {
      '/': {
        "@type": "WebPage",
        "@id": "https://chiefops.co.za/#webpage",
        "url": "https://chiefops.co.za",
        "name": "ChiefOps | AI-Powered Business Operating Systems",
        "description": "Turn attention into leads, leads into clients, and clients into long-term revenue.",
        "isPartOf": {"@id": "https://chiefops.co.za/#website"},
        "about": {"@id": "https://chiefops.co.za/#organization"}
      },
      '/audit': {
        "@type": "WebPage",
        "@id": "https://chiefops.co.za/audit/#webpage",
        "url": "https://chiefops.co.za/audit",
        "name": "Get a ChiefOps Audit",
        "description": "Free business audit to identify growth opportunities",
        "isPartOf": {"@id": "https://chiefops.co.za/#website"}
      },
      '/solutions': {
        "@type": "WebPage",
        "@id": "https://chiefops.co.za/solutions/#webpage",
        "url": "https://chiefops.co.za/solutions",
        "name": "ChiefOps Solutions",
        "description": "Explore our AI-powered business solutions",
        "isPartOf": {"@id": "https://chiefops.co.za/#website"}
      }
    };

    // Get page-specific schema or use homepage schema
    const pageSchema = pageSpecificSchemas[pathname as keyof typeof pageSpecificSchemas] || pageSpecificSchemas['/'];

    // Add breadcrumb schema
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://chiefops.co.za"
      }
    ];

    if (pathname && pathname !== '/') {
      const pathParts = pathname.split('/').filter(Boolean);
      pathParts.forEach((part, index) => {
        const url = `https://chiefops.co.za/${pathParts.slice(0, index + 1).join('/')}`;
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": part.charAt(0).toUpperCase() + part.slice(1),
          "item": url
        });
      });
    }

    const breadcrumbSchema = {
      "@type": "BreadcrumbList",
      "@id": "https://chiefops.co.za/#breadcrumb",
      "itemListElement": breadcrumbItems
    };

    return {
      "@context": "https://schema.org",
      "@graph": [...baseGraph, pageSchema, breadcrumbSchema]
    };
  };

  const schema = getSchemaMarkup();

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
