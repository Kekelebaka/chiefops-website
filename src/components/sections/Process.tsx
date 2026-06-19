const steps = [
  { num: '01', title: 'Audit', desc: 'We diagnose your operations — what works, what leaks, what compounds.' },
  { num: '02', title: 'Build', desc: 'We build the system you need, starting with the highest-impact layer.' },
  { num: '03', title: 'Retain', desc: 'We keep it running, updating, backing up — your OS stays alive.' },
  { num: '04', title: 'Scale', desc: 'We turn it into a long-term advantage, adding intelligence over time.' },
];

export function Process() {
  return (
    <section className="section-dark bg-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-3">HOW IT WORKS</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
            Audit → Build → Retain → Scale.
          </h2>
          <p className="text-lg text-offwhite/70 leading-relaxed">
            We diagnose your operations, build the system you need, keep it running, and turn it
            into a long-term advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative rounded-xl border border-line bg-ink/50 p-6 transition-all duration-200 hover:border-orange/30"
            >
              <p className="font-mono text-3xl font-bold text-orange mb-3">{step.num}</p>
              <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
