import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { RobotMascot } from '@/components/RobotMascot';

export function Hero() {
  return (
    <section className="bg-primary-navy text-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary-orange font-semibold text-lg tracking-wider uppercase">
                AI-Powered Business Operating Systems
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                Your Business Doesn't<br />
                Need a Website.
                <br />
                It Needs an
                <br />
                <span className="text-primary-orange">Operating System.</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              ChiefOps builds AI-ready websites, sales funnels, client portals, and automation systems that turn attention into leads, leads into clients, and clients into long-term revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/audit">
                <Button variant="primary" size="lg" className="shadow-lg hover:shadow-xl">
                  Get a ChiefOps Audit
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-navy">
                  Explore Solutions
                </Button>
              </Link>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-400">
                ⚡ 100% Serverless • Cloudflare-Powered • AI-Ready
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <RobotMascot />
          </div>
        </div>
      </div>
    </section>
  );
}
