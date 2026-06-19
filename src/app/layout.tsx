import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SchemaMarkup } from '@/components/layout/SchemaMarkup';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ChiefOps | AI-Powered Business Operating Systems',
  description: 'Turn attention into leads, leads into clients, and clients into long-term revenue.',
  keywords: ['AI', 'Business', 'Operating Systems', 'Automation', 'Websites', 'Sales Funnels', 'Client Portals'],
  authors: [{ name: 'ChiefOps' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chiefops.co.za',
    siteName: 'ChiefOps',
    title: 'ChiefOps | AI-Powered Business Operating Systems',
    description: 'Turn attention into leads, leads into clients, and clients into long-term revenue.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChiefOps | AI-Powered Business Operating Systems',
    description: 'Turn attention into leads, leads into clients, and clients into long-term revenue.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#0A2540" />
        <meta name="msapplication-TileColor" content="#0A2540" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.className} bg-white text-neutral-gray`}>
        <Header />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
