export const metadata = {
  title: 'Terms of Service — ChiefOps',
  description: 'ChiefOps terms of service.',
  alternates: { canonical: 'https://chiefops.co.za/terms' },
};

export default function TermsPage() {
  return (
    <div className="section-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-bold text-3xl mb-8">Terms of Service</h1>
        <p className="text-sm text-muted mb-8">Last updated: June 2024</p>

        <div className="prose prose-lg max-w-none text-charcoal/80 space-y-6">
          <p>
            By accessing the ChiefOps website and requesting services, you agree to these
            terms of service.
          </p>

          <h2 className="font-display font-bold text-xl">Services</h2>
          <p>
            ChiefOps provides business operating system services including website development,
            automation, portals, and AI integrations. All prices shown are &quot;from&quot; prices — final
            pricing is determined after an audit.
          </p>

          <h2 className="font-display font-bold text-xl">30-Day Guarantee</h2>
          <p>
            If you&apos;re not satisfied with the initial deliverable, we&apos;ll make reasonable attempts to
            address your concerns within 30 days of delivery.
          </p>

          <h2 className="font-display font-bold text-xl">Payments</h2>
          <p>
            All prices are quoted in ZAR (South African Rand) unless otherwise stated.
            USD prices are approximate and subject to exchange rate fluctuation.
            Payment terms are agreed upon per project.
          </p>

          <h2 className="font-display font-bold text-xl">Limitation of Liability</h2>
          <p>
            ChiefOps&apos;s liability is limited to the value of the services purchased. We are not
            liable for indirect, incidental, or consequential damages.
          </p>

          <h2 className="font-display font-bold text-xl">Contact</h2>
          <p>
            Questions?{' '}
            <a href="mailto:info@chiefops.co.za" className="text-orange hover:underline">
              info@chiefops.co.za
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
