export const metadata = {
  title: 'Privacy Policy — ChiefOps',
  description: 'ChiefOps privacy policy — how we handle your data.',
  alternates: { canonical: 'https://chiefops.co.za/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="section-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-bold text-3xl mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted mb-8">Last updated: June 2024</p>

        <div className="prose prose-lg max-w-none text-charcoal/80 space-y-6">
          <p>
            ChiefOps (&quot;we&quot;, &quot;us&quot;) respects your privacy and is committed to protecting your
            personal information in compliance with the Protection of Personal Information Act
            (POPIA) of South Africa.
          </p>

          <h2 className="font-display font-bold text-xl">Information We Collect</h2>
          <p>
            We collect information you provide voluntarily through our audit form, contact
            form, or correspondence — including your name, business name, email address,
            phone number, and business details.
          </p>

          <h2 className="font-display font-bold text-xl">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To respond to your audit request or inquiry</li>
            <li>To provide our services</li>
            <li>To improve our website and services</li>
          </ul>

          <h2 className="font-display font-bold text-xl">Data Sharing</h2>
          <p>
            We may share your information with third-party service providers (such as
            Static Forms for form submissions) solely to deliver our services. We do not sell
            your personal information.
          </p>

          <h2 className="font-display font-bold text-xl">Your Rights</h2>
          <p>
            Under POPIA, you have the right to access, correct, or delete your personal
            information. Contact us at{' '}
            <a href="mailto:info@chiefops.co.za" className="text-orange hover:underline">
              info@chiefops.co.za
            </a>{' '}
            to exercise these rights.
          </p>

          <h2 className="font-display font-bold text-xl">Contact</h2>
          <p>
            Questions about this policy? Email{' '}
            <a href="mailto:info@chiefops.co.za" className="text-orange hover:underline">
              info@chiefops.co.za
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
