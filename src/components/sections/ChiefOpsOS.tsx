const layers = [
  { title: 'Website', desc: 'Attract & educate', icon: '🌐' },
  { title: 'Funnel', desc: 'Convert visitors to leads', icon: '🎯' },
  { title: 'Portal', desc: 'Clients & staff log in', icon: '🔐' },
  { title: 'Automation', desc: 'Remove manual work', icon: '⚡' },
  { title: 'Document', desc: 'Quotes, invoices, payslips, reports', icon: '📄' },
  { title: 'AI', desc: 'Content, admin, support', icon: '🤖' },
  { title: 'Dashboard', desc: 'See everything', icon: '📊' },
  { title: 'Support', desc: 'Keep it alive & improving', icon: '🛡️' },
];

export function ChiefOpsOS() {
  return (
    <section className="section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-3">THE CHIEFOPS OS</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
            One business. One system. One command centre.
          </h2>
          <p className="text-lg text-offwhite/70 leading-relaxed">
            A custom operating system built around your business. Switch on the layers you need.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {layers.map((layer) => (
            <div
              key={layer.title}
              className="relative rounded-xl border border-line bg-panel p-5 text-center transition-all duration-200 hover:border-orange/30"
            >
              <span className="text-3xl block mb-3">{layer.icon}</span>
              <h3 className="font-display font-bold text-sm mb-1">{layer.title}</h3>
              <p className="text-xs text-muted">{layer.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted text-sm italic">
          We build the operating layer behind modern businesses — not a page that just sits there.
        </p>
      </div>
    </section>
  );
}
