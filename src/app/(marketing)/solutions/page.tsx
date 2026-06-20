import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solutions — Get More Clients, Automate Admin, Add AI | ChiefOps',
  description: 'ChiefOps solutions by business pain: more clients, professional presence, admin automation, client/staff portals, documents and AI — built for SA SMEs.',
  alternates: { canonical: 'https://chiefops.co.za/solutions' },
};

const solutions = [
  {
    id: 'client-growth',
    pain: 'I need more clients.',
    costs: 'Leads arrive and leak — no funnel, no follow-up.',
    weBuild:
      'Conversion landing pages, lead capture, WhatsApp lead flow, follow-up messages, analytics.',
    outcome: 'More enquiries, faster follow-up, more booked work.',
  },
  {
    id: 'presence',
    pain: 'My business looks unprofessional.',
    costs: 'Clients judge you in seconds and quietly choose a competitor.',
    weBuild:
      'Premium website, brand basics, company profile, domain & email, branded document templates.',
    outcome: 'Instant credibility and trust.',
  },
  {
    id: 'automation',
    pain: 'I\'m drowning in admin.',
    costs: 'Hours lost to manual quotes, invoices and reminders.',
    weBuild:
      'Quote/invoice/payslip workflows, client forms, email & WhatsApp flows, reminders, reports.',
    outcome: 'Hours back every week, fewer mistakes.',
  },
  {
    id: 'portals',
    pain: 'I need a client or staff system.',
    costs: 'Information scattered across chats, files and heads.',
    weBuild:
      'Client/staff logins, records, document upload/download, notifications, reporting, role-based access.',
    outcome: 'One command centre for your operation.',
  },
  {
    id: 'documents',
    pain: 'My documents look amateur.',
    costs: 'Scrappy quotes and invoices undercut your pricing and brand.',
    weBuild:
      'Branded, automated quotes, invoices, receipts, payslips, reports, handover PDFs.',
    outcome: 'Premium paperwork that closes deals.',
  },
  {
    id: 'ai',
    pain: 'I want to add AI.',
    costs: 'Doing slowly and manually what AI could do in seconds.',
    weBuild:
      'AI-ready content structure, assistants, content & enquiry workflows, drafting, summarisation.',
    outcome: 'Speed, clarity and leverage without hiring.',
  },
];

export default function SolutionsPage() {
  return (
    <div className="section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Start where it hurts most.
          </h1>
          <p className="text-lg text-charcoal/70">
            Six systems. Switch on what your business needs now — add the rest as you grow.
          </p>
        </div>

        {/* Sidebar nav (desktop) */}
        <div className="hidden lg:flex fixed left-0 top-20 bottom-0 w-56 p-6 overflow-y-auto">
          <nav className="space-y-1">
            {solutions.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-charcoal/60 hover:text-orange hover:bg-orange/5 transition-colors"
              >
                {s.pain.replace(/"/g, '')}
              </a>
            ))}
            <div className="pt-4 border-t border-line mt-4">
              <Link
                href="/pricing"
                className="block px-3 py-2 rounded-lg text-sm font-bold text-orange hover:bg-orange/5 transition-colors"
              >
                View Pricing →
              </Link>
            </div>
          </nav>
        </div>

        {/* Solution sections */}
        <div className="space-y-20 lg:ml-64">
          {solutions.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <p className="text-xs font-mono text-orange mb-2">{s.pain}</p>
                  <h2 className="font-display font-bold text-2xl mb-4">
                    {s.id === 'client-growth' && 'Client Growth Systems'}
                    {s.id === 'presence' && 'Business Presence Systems'}
                    {s.id === 'automation' && 'Admin Automation Systems'}
                    {s.id === 'portals' && 'Portal & Dashboard Systems'}
                    {s.id === 'documents' && 'Document Automation Systems'}
                    {s.id === 'ai' && 'AI Operations Systems'}
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-mono text-muted uppercase tracking-widest mb-1">
                        Costs You
                      </p>
                      <p className="text-charcoal/80">{s.costs}</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono text-muted uppercase tracking-widest mb-1">
                        We Build
                      </p>
                      <p className="text-charcoal/80">{s.weBuild}</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono text-muted uppercase tracking-widest mb-1">
                        Outcome
                      </p>
                      <p className="text-orange font-bold">{s.outcome}</p>
                    </div>
                  </div>

                  <Link
                    href="/audit"
                    className="inline-block mt-6 cta-primary"
                  >
                    Get a ChiefOps Audit
                  </Link>
                </div>

                <div className="relative rounded-xl border border-line bg-panel p-8 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-display font-bold text-4xl mb-2">
                      {s.id === 'client-growth' && '🎯'}
                      {s.id === 'presence' && '✨'}
                      {s.id === 'automation' && '⚡'}
                      {s.id === 'portals' && '🔐'}
                      {s.id === 'documents' && '📄'}
                      {s.id === 'ai' && '🤖'}
                    </p>
                    <p className="text-muted text-sm">
                      {s.id === 'client-growth' && 'Leads → Revenue'}
                      {s.id === 'presence' && 'Trust → Sales'}
                      {s.id === 'automation' && 'Time → Profit'}
                      {s.id === 'portals' && 'Chaos → Order'}
                      {s.id === 'documents' && 'Scrappy → Premium'}
                      {s.id === 'ai' && 'Manual → Intelligent'}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Close CTA */}
          <div className="relative rounded-xl border border-line bg-panel p-8 text-center">
            <h3 className="font-display font-bold text-xl mb-2">
              Not sure which system you need?
            </h3>
            <p className="text-muted text-sm mb-6">
              Start with an audit — we&apos;ll show you exactly what to fix first.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/audit"
                className="cta-primary"
              >
                Get a ChiefOps Audit
              </Link>
              <Link
                href="/pricing"
                className="cta-outline"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
