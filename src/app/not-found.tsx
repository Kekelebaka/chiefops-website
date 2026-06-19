import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section-dark min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <h1 className="font-display font-extrabold text-8xl text-orange mb-4">404</h1>
        <h2 className="font-display font-bold text-2xl mb-3">Page not found</h2>
        <p className="text-muted mb-8">
          This page doesn&apos;t exist — or we haven&apos;t built it yet. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/" className="cta-primary">
            Back to Home
          </Link>
          <Link href="/solutions" className="cta-outline">
            Explore Solutions
          </Link>
          <Link href="/audit" className="cta-outline">
            Get an Audit
          </Link>
          <a
            href="https://wa.me/27000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-outline"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
