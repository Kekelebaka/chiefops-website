import './globals.css';
import type { Metadata } from 'next';
import { Sora, Inter, JetBrains_Mono } from 'next/font/google';
import { SchemaMarkup } from '@/components/layout/SchemaMarkup';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFab } from '@/components/WhatsAppFab';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ChiefOps | AI-Powered Business Operating Systems',
    template: '%s | ChiefOps',
  },
  description:
    'ChiefOps builds AI-ready websites, sales funnels, client portals, automations and branded documents that make South African businesses look professional, sell faster, and run with control.',
  keywords: [
    'AI', 'Business', 'Operating Systems', 'Automation', 'Websites',
    'Sales Funnels', 'Client Portals', 'South Africa', 'ZAR',
  ],
  authors: [{ name: 'ChiefOps' }],
  metadataBase: new URL('https://chiefops.co.za'),
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://chiefops.co.za',
    siteName: 'ChiefOps',
    title: 'ChiefOps | AI-Powered Business Operating Systems',
    description:
      'ChiefOps builds AI-ready websites, sales funnels, client portals, automations and branded documents.',
    images: [
      {
        url: 'https://chiefops.co.za/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ChiefOps — AI-Powered Business Operating Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChiefOps | AI-Powered Business Operating Systems',
    description:
      'ChiefOps builds AI-ready websites, sales funnels, client portals, automations and branded documents.',
    images: ['https://chiefops.co.za/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
      <head>
        <SchemaMarkup />
        <link rel="icon" href="/logo-chiefops.png" type="image/png" />
        <link rel="alternate icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#F7811E" />
        <meta name="msapplication-TileColor" content="#F7811E" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.className} bg-white text-charcoal`}>
        <Header />
        <main className="pt-16 min-h-screen">{children}</main>
        <WhatsAppFab />
        <Footer />
      </body>
    </html>
  );
}
