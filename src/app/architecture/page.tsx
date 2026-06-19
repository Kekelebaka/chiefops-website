export const metadata = {
  title: 'ChiefOps Tech Stack — Cloudflare, Next.js, AI-Ready Architecture',
  description:
    'Cloudflare Pages, Workers, D1, R2, Resend, Turnstile — serverless-first architecture.',
  alternates: { canonical: 'https://chiefops.co.za/architecture' },
};

const layers = [
  { name: 'Frontend', tech: 'Next.js 14 (static export)', desc: 'React 18, Tailwind CSS, TypeScript. Served from Cloudflare Pages.' },
  { name: 'Hosting', tech: 'Cloudflare Pages', desc: 'Global CDN, edge caching, zero server management.' },
  { name: 'Database', tech: 'Cloudflare D1', desc: 'SQLite at the edge. Audit submissions, lead storage.' },
  { name: 'Storage', tech: 'Cloudflare R2', desc: 'Zero-egress-fees object storage. Assets, payslips, documents.' },
  { name: 'Workers', tech: 'Cloudflare Workers', desc: 'Email inbox (Dedicated IP), payslip generation, API routes.' },
  { name: 'Email', tech: 'Resend + Cloudflare Email Routing', desc: 'Transactional emails, auto-replies, inbox forwarding.' },
  { name: 'Security', tech: 'Cloudflare Turnstile', desc: 'CAPTCHA-free spam protection on all forms.' },
  { name: 'Analytics', tech: 'Privacy-first', desc: 'No cookies, no tracking pixels. Basic pageview metrics.' },
];

export default function ArchitecturePage() {
  return (
    <div className="section-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            ChiefOps Tech Stack
          </h1>
          <p className="text-lg text-offwhite/70">
            Serverless-first. Cloudflare-native. Built for speed, security, and AI-readiness.
          </p>
        </div>

        <div className="space-y-4">
          {layers.map((layer, i) => (
            <div
              key={layer.name}
              className="relative rounded-xl border border-line bg-panel/50 p-6 transition-all hover:border-orange/20"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <div className="sm:w-32 shrink-0">
                  <p className="text-xs font-mono text-muted">{String(i + 1).padStart(2, '0')}</p>
                  <p className="font-display font-bold text-lg">{layer.name}</p>
                </div>
                <div className="flex-1">
                  <p className="font-mono text-sm text-orange mb-1">{layer.tech}</p>
                  <p className="text-sm text-offwhite/70">{layer.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-muted text-sm">
          <p>
            This architecture gives us{' '}
            <strong className="text-offwhite">sub-second load times</strong>,{' '}
            <strong className="text-offwhite">zero server costs</strong>, and{' '}
            <strong className="text-offwhite">99.99% uptime</strong> — out of the box.
          </p>
        </div>
      </div>
    </div>
  );
}
