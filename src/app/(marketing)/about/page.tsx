import Link from 'next/link';

export const metadata = {
  title: 'About ChiefOps — South African Business Operating Systems',
  description:
    'About ChiefOps: the who, why, and how behind AI-powered business operating systems for South African businesses.',
  alternates: {
    canonical: 'https://chiefops.co.za/about',
  },
};

export default function AboutPage() {
  return (
    <div className="section-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-3xl sm:text-4xl mb-4">About ChiefOps</h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-charcoal/80 leading-relaxed">
            ChiefOps is a South African technology firm that builds <strong>business operating systems</strong>
            for companies that need more than a website — they need a system that works.
          </p>

          <p className="text-charcoal/80 leading-relaxed">
            We started because too many South African businesses look amateur online. Their
            websites sit in one place, their quotes come as Word documents, their client
            information lives in WhatsApp chats, and their leads slip through the cracks.
          </p>

          <p className="text-charcoal/80 leading-relaxed">
            <strong>The fix isn&apos;t another tool. It&apos;s an operating system.</strong>
          </p>

          <h2 className="font-display font-bold text-xl mt-8 mb-4">Our approach</h2>
          <ul className="text-charcoal/80 leading-relaxed space-y-2">
            <li><strong>Audit first.</strong> Every build starts with understanding the system.</li>
            <li><strong>Build the layer that matters.</strong> We don&apos;t do everything — we do what moves the needle.</li>
            <li><strong>Keep it alive.</strong> A system that&apos;s not maintained is a system that breaks.</li>
            <li><strong>AI-ready from day one.</strong> Content structure, schema, and clarity compound over time.</li>
          </ul>

          <h2 className="font-display font-bold text-xl mt-8 mb-4">Built for South Africa</h2>
          <p className="text-charcoal/80 leading-relaxed">
            We think ZAR-first. WhatsApp-first. Mobile-first. Our clients range from sole
            proprietors to multi-location operations, and every system we build is designed
            for the way South African businesses actually work.
          </p>

          <div className="mt-8 p-6 rounded-xl border border-line bg-offwhite/50 text-center">
            <p className="text-muted text-sm mb-4">
              Want to understand the technology behind ChiefOps?
            </p>
            <Link href="/architecture" className="text-orange hover:underline text-sm font-medium">
              → View our tech stack
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
