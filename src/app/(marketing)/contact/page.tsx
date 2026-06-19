import Link from 'next/link';

export const metadata = {
  title: 'Contact ChiefOps — WhatsApp, Email, or Audit Request',
  description:
    'Contact ChiefOps via WhatsApp, email, or the audit form. We respond within 24 hours.',
  alternates: {
    canonical: 'https://chiefops.co.za/contact',
  },
};

const PHONE_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '27000000000';
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@chiefops.co.za';

export default function ContactPage() {
  return (
    <div className="section-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-3xl sm:text-4xl mb-4">Contact ChiefOps</h1>
          <p className="text-lg text-charcoal/70">
            We respond within 24 hours. WhatsApp is fastest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* WhatsApp */}
          <div className="rounded-xl border border-line bg-white p-6 text-center hover:border-orange/30 transition-colors">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-display font-bold mb-1">WhatsApp</h3>
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
                "Hi ChiefOps, I'd like a business audit."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange text-sm hover:underline"
            >
              {PHONE_NUMBER}
            </a>
            <p className="text-xs text-muted mt-2">Fastest response</p>
          </div>

          {/* Email */}
          <div className="rounded-xl border border-line bg-white p-6 text-center hover:border-orange/30 transition-colors">
            <div className="text-3xl mb-3">✉️</div>
            <h3 className="font-display font-bold mb-1">Email</h3>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-orange text-sm hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="text-xs text-muted mt-2">We respond within 24h</p>
          </div>

          {/* Audit */}
          <div className="rounded-xl border border-line bg-white p-6 text-center hover:border-orange/30 transition-colors">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-display font-bold mb-1">Free Audit</h3>
            <Link href="/audit" className="text-orange text-sm hover:underline">
              Get a ChiefOps Audit
            </Link>
            <p className="text-xs text-muted mt-2">Start with an audit</p>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="rounded-xl border border-line bg-offwhite/50 h-48 flex items-center justify-center mb-8">
          <p className="text-muted text-sm">South Africa 🇿🇦 — Serving businesses nationwide</p>
        </div>

        {/* Quick CTA */}
        <div className="text-center">
          <Link
            href="/audit"
            className="cta-primary"
          >
            Get a ChiefOps Audit
          </Link>
        </div>
      </div>
    </div>
  );
}
