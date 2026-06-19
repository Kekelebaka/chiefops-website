import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { name: 'AI-Ready Websites', href: '/solutions#ai-websites' },
      { name: 'Sales Funnels', href: '/solutions#sales-funnels' },
      { name: 'Client Portals', href: '/solutions#client-portals' },
      { name: 'Automation Systems', href: '/solutions#automation' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Support', href: '/support' },
      { name: 'Status', href: '/status' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
    ],
  };

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/chiefops', icon: '💻' },
    { name: 'Twitter', href: 'https://twitter.com/chiefops', icon: '🐦' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/chiefops', icon: '🔗' },
    { name: 'Email', href: 'mailto:info@chiefops.co.za', icon: '✉️' },
  ];

  return (
    <footer className="bg-primary-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-orange to-primary-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CO</span>
              </div>
              <span className="text-white font-bold text-xl">ChiefOps</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              AI-Powered Business Operating Systems
            </p>
            <p className="text-gray-400 text-sm">
              Turn attention into leads, leads into clients, and clients into long-term revenue.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-orange to-primary-teal p-6 rounded-xl mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-bold text-white text-lg mb-2">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/80 text-sm">
                Get a free ChiefOps audit and discover how we can help you grow.
              </p>
            </div>
            <Link href="/audit">
              <Button variant="secondary" size="md" className="shadow-lg">
                Get Free Audit
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} ChiefOps. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Badges */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-end">
            <span className="inline-block px-2 py-1 bg-gray-800 text-xs rounded text-gray-300">
              Next.js
            </span>
            <span className="inline-block px-2 py-1 bg-gray-800 text-xs rounded text-gray-300">
              Tailwind CSS
            </span>
            <span className="inline-block px-2 py-1 bg-gray-800 text-xs rounded text-gray-300">
              Cloudflare
            </span>
            <span className="inline-block px-2 py-1 bg-gray-800 text-xs rounded text-gray-300">
              Serverless
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
