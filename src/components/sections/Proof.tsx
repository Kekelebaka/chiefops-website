const caseStudies = [
  {
    title: 'Lehakwe School & Daycare OS',
    desc: 'Parent portal, fee tracking, registration forms and payslips in one system.',
    tag: 'Operating Solution',
  },
];

export function Proof() {
  return (
    <section className="section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-3">PROOF</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
            Real systems. Real businesses.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="card relative rounded-xl border border-line bg-white p-6"
            >
              <span className="inline-block px-2 py-0.5 rounded bg-orange/10 text-orange text-xs font-mono font-bold mb-3">
                {cs.tag}
              </span>
              <h3 className="font-display font-bold text-lg mb-2">{cs.title}</h3>
              <p className="text-sm text-muted">{cs.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
