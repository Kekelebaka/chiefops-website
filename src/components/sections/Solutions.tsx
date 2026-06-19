import Link from 'next/link';

const solutions = [
  {
    id: 'client-growth',
    pain: 'I need more clients',
    title: 'Client Growth Systems',
    desc: 'Conversion landing pages, lead capture, WhatsApp flows, follow-up sequences.',
  },
  {
    id: 'presence',
    pain: 'My business looks unprofessional',
    title: 'Business Presence Systems',
    desc: 'Premium website, brand basics, company profile, domain & email, branded templates.',
  },
  {
    id: 'automation',
    pain: 'I\'m drowning in admin',
    title: 'Admin Automation Systems',
    desc: 'Quote/invoice/payslip workflows, client forms, email & WhatsApp flows, reminders.',
  },
  {
    id: 'portals',
    pain: 'I need a client or staff system',
    title: 'Portal & Dashboard Systems',
    desc: 'Client/staff logins, records, document upload, notifications, role-based access.',
  },
  {
    id: 'documents',
    pain: 'My documents look amateur',
    title: 'Document Automation Systems',
    desc: 'Branded quotes, invoices, receipts, payslips, reports, handover PDFs.',
  },
  {
    id: 'ai',
    pain: 'I want to add AI',
    title: 'AI Operations Systems',
    desc: 'AI-ready content structure, assistants, content & enquiry workflows, summarisation.',
  },
];

export function Solutions() {
  return (
    <section className="section-light bg-offwhite/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-3">SOLUTIONS</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
            Start where it hurts most.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <Link
              key={s.id}
              href={`/solutions#${s.id}`}
              className="card relative rounded-xl border border-line bg-white p-6 transition-all duration-200 hover:border-orange/30 hover:shadow-lg hover:shadow-orange/5 group"
            >
              <p className="text-xs font-mono text-orange mb-2">&ldquo;{s.pain}&rdquo;</p>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-orange transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-muted">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
