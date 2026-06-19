export function Problem() {
  const problems = [
    { title: 'Invisible online', desc: 'No one can find you or takes you seriously.' },
    { title: 'Leads slip away', desc: 'Leads come in but nobody follows up.' },
    { title: 'Drowning in admin', desc: 'Quotes, invoices, reminders — all manual.' },
    { title: 'Amateur documents', desc: 'Scrappy quotes undercut your pricing and brand.' },
    { title: 'No client or staff system', desc: 'Information scattered across chats and files.' },
    { title: 'AI feels out of reach', desc: 'Doing slowly what AI could do in seconds.' },
  ];

  return (
    <section className="section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-3">THE PROBLEM</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
            Most businesses run on chaos, not systems.
          </h2>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Your website sits in one place. Quotes live in another. Invoices are scattered,
            client info is everywhere, staff documents are a mess — and leads come in but
            nobody follows up. You look busy. The system behind you is weak.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((p) => (
            <div
              key={p.title}
              className="card relative rounded-xl border border-line bg-white p-6 transition-all duration-200 hover:border-orange/30 hover:shadow-lg hover:shadow-orange/5"
            >
              <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-charcoal/70 font-medium">
          These don&apos;t stay still — they compound, quietly costing you clients and hours
          every month. ChiefOps fixes the system.
        </p>
      </div>
    </section>
  );
}
