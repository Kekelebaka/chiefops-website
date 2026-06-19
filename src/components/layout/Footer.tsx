import Link from 'next/link';
import { Logo } from '@/components/Logo';

const PHONE_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '27000000000';
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@chiefops.co.za';

const MAIN_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/audit', label: 'Get an Audit' },
];

const PAGE_LINKS = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/sitemap.xml', label: 'Sitemap' },
];

export function Footer() {
  return (
    <footer className="bg-ink text-offwhite border-t border-line">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-xl bg-panel border border-line p-8 text-center">
          <h3 className="font-display font-bold text-xl mb-2">
            Ready to run your business on a system?
          </h3>
          <p className="text-muted text-sm mb-6">
            Start with a ChiefOps audit — we&apos;ll show you exactly what to fix first.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center rounded-lg bg-orange px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-orange-soft hover:shadow-lg hover:shadow-orange/20"
            >
              Get a ChiefOps Audit
            </Link>
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
                "Hi ChiefOps, I'd like a business audit."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-2.5 text-sm font-bold text-offwhite transition-all hover:border-orange/50 hover:text-orange"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-3 text-sm text-muted max-w-sm">
              AI-powered business operating systems. We build the operating layer behind
              modern businesses — not a page that just sits there.
            </p>
            <div className="mt-4 space-y-1 text-sm text-muted">
              <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-offwhite hover:text-orange transition-colors">{CONTACT_EMAIL}</a></p>
              <p>WhatsApp: <a href={`https://wa.me/${PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-offwhite hover:text-orange transition-colors">{PHONE_NUMBER}</a></p>
            </div>
          </div>

          {/* Links column */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-muted mb-3">
              Pages
            </h4>
            <ul className="space-y-2">
              {MAIN_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-offwhite/70 hover:text-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-muted mb-3">
              Legal
            </h4>
            <ul className="space-y-2">
              {PAGE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-offwhite/70 hover:text-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted">
          <p>© {new Date().getFullYear()} ChiefOps. All rights reserved.</p>
          <p>Built for humans. Structured for AI.</p>
        </div>
      </div>
    </footer>
  );
}
