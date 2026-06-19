export function AIReady() {
  const features = [
    'Clear definitions — AI and search engines can read your content',
    'FAQs with schema markup — highest ROI for AI snippets',
    'Industry & location signals — local relevance baked in',
    'Clean structure — fast, mobile-first pages',
    'Brand consistency — trust and authority compound',
  ];

  return (
    <section className="section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-3">BUILT FOR THE NEXT SEARCH</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
              Built for humans. Structured for AI.
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
              People don&apos;t only Google anymore — they ask AI. ChiefOps sites are easy for
              humans to trust and easy for AI and search engines to read.
            </p>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orange shrink-0" />
                  <span className="text-sm text-charcoal/80">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-xl border border-line bg-panel p-8 text-center">
            <div className="space-y-4">
              <div className="font-mono text-2xl text-orange font-bold">&lt;schema /&gt;</div>
              <div className="h-px bg-line" />
              <div className="text-muted text-sm space-y-2">
                <p>FAQPage → rich snippets</p>
                <p>LocalBusiness → map &amp; local search</p>
                <p>Service entries → category ranking</p>
                <p>Breadcrumbs → navigation clarity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
