'use client';

import Link from 'next/link';

const PHONE_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '27000000000';

export function FinalCTA() {
  return (
    <section className="section-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
          Ready to run your business on a system?
        </h2>
        <p className="text-lg text-offwhite/70 mb-8">
          Start with a ChiefOps audit — we&apos;ll show you exactly what to fix first.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/audit"
            className="cta-primary shadow-lg shadow-orange/20"
          >
            Get a ChiefOps Audit
          </Link>
          <a
            href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
              "Hi ChiefOps, I'd like a business audit."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-outline"
          >
            Chat on WhatsApp
          </a>
        </div>
        <p className="mt-6 text-xs text-muted">
          Final pricing depends on scope — every build starts with an audit. 30-day guarantee.
        </p>
      </div>
    </section>
  );
}
