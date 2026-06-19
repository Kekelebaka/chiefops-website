'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function SolutionsPage() {
  const solutions = [
    {
      id: 1,
      title: 'AI-Ready Websites',
      description: 'High-performance, mobile-first websites that load in milliseconds and convert visitors into leads.',
      longDescription: 'Our websites are built with modern technologies (Next.js, Tailwind CSS) and deployed on Cloudflare Pages for lightning-fast global performance. Every site includes Schema.org markup for better SEO and is optimized for both desktop and mobile users.',
      features: [
        'Next.js App Router',
        'Tailwind CSS Styling',
        'Cloudflare Pages Hosting',
        'Global CDN Distribution',
        'Schema.org JSON-LD Markup',
        'Mobile-First Responsive Design',
        'SEO Optimized',
        'Accessibility Compliant',
      ],
      benefits: [
        'Load times under 1 second globally',
        'Better search engine rankings',
        'Higher conversion rates',
        'Future-proof architecture',
      ],
      price: '$299/month',
      icon: '🌐',
      color: 'orange',
    },
    {
      id: 2,
      title: 'Sales Funnels',
      description: 'Automated sales pipelines that nurture leads and close deals while you sleep.',
      longDescription: 'Our sales funnel systems are designed to capture leads, nurture them through automated email sequences, and convert them into paying customers. Built on Cloudflare Workers and D1 database for reliable, scalable automation.',
      features: [
        'Lead Capture Forms',
        'Email Automation',
        'SMS Integration',
        'CRM Sync',
        'Analytics Dashboard',
        'A/B Testing',
        'Automated Follow-ups',
        'Conversion Tracking',
      ],
      benefits: [
        '24/7 lead nurturing',
        'Increased sales conversions',
        'Reduced manual follow-up',
        'Better customer insights',
      ],
      price: 'Included in Professional',
      icon: '📈',
      color: 'teal',
    },
    {
      id: 3,
      title: 'Client Portals',
      description: 'Self-service portals where clients can access documents, make payments, and track progress.',
      longDescription: 'Give your clients a professional, branded portal to access their documents, view project status, make payments, and communicate with your team. Reduce support tickets and improve client satisfaction.',
      features: [
        'Secure Authentication',
        'Document Management',
        'Payment Integration',
        'Project Tracking',
        'Message Center',
        'File Sharing',
        'Invoicing System',
        'Custom Branding',
      ],
      benefits: [
        'Reduced support overhead',
        'Improved client satisfaction',
        'Faster payments',
        'Better organization',
      ],
      price: 'Included in Professional',
      icon: '🔐',
      color: 'navy',
    },
    {
      id: 4,
      title: 'Automation Systems',
      description: 'AI-powered workflows that eliminate manual tasks and reduce operational costs.',
      longDescription: 'Automate repetitive business processes with our AI-powered workflows. From data entry to report generation, let machines handle the boring stuff so you can focus on growth.',
      features: [
        'Workflow Designer',
        'AI Assistants',
        'RPA Bots',
        'API Integrations',
        'Scheduled Tasks',
        'Conditional Logic',
        'Data Processing',
        'Notification System',
      ],
      benefits: [
        'Save hours every week',
        'Reduce human error',
        'Scale without hiring',
        '24/7 operation',
      ],
      price: 'Included in Enterprise',
      icon: '🤖',
      color: 'purple',
    },
    {
      id: 5,
      title: 'Payslip Generator',
      description: 'Automated payslip generation and delivery for your employees.',
      longDescription: 'Our payslip generator automatically creates professional payslips, calculates taxes and deductions, and delivers them to your employees via email. Built on Cloudflare Workers for reliable, secure processing.',
      features: [
        'Automated Calculation',
        'PDF Generation',
        'Email Delivery',
        'Secure Storage',
        'Tax Calculation',
        'Custom Templates',
        'Bulk Processing',
        'Audit Trail',
      ],
      benefits: [
        'Eliminate manual payslip creation',
        'Ensure accuracy',
        'Maintain compliance',
        'Save administrative time',
      ],
      price: 'Custom',
      icon: '💰',
      color: 'green',
    },
    {
      id: 6,
      title: 'Email Systems',
      description: 'Complete email infrastructure without traditional hosting.',
      longDescription: 'We set up your business email using Cloudflare Email Routing for inbound messages and Cloudflare Workers for processing. Outbound emails use Cloudflare Email Service. No traditional email hosting needed.',
      features: [
        'Cloudflare Email Routing',
        'Inbound Processing',
        'Auto-Responders',
        'FAQ Matching',
        'Forwarding Rules',
        'Spam Filtering',
        'Email Templates',
        'Analytics',
      ],
      benefits: [
        'No hosting management',
        'Lower costs',
        'Better reliability',
        'Advanced processing',
      ],
      price: 'Included in all plans',
      icon: '✉️',
      color: 'blue',
    },
  ];

  const colorClasses = {
    orange: 'bg-primary-orange/10 border-primary-orange text-primary-orange',
    teal: 'bg-primary-teal/10 border-primary-teal text-primary-teal',
    navy: 'bg-primary-navy/10 border-primary-navy text-primary-navy',
    purple: 'bg-purple-400/10 border-purple-400 text-purple-400',
    green: 'bg-green-500/10 border-green-500 text-green-500',
    blue: 'bg-blue-500/10 border-blue-500 text-blue-500',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how ChiefOps can transform your business with our complete suite of digital solutions.
          </p>
          <div className="mt-8">
            <Link href="/audit">
              <Button variant="primary" size="lg" className="shadow-lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Solution Categories</h3>
                  <nav className="space-y-2">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.id}
                        href={`#solution-${solution.id}`}
                        className="block p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary-orange transition-colors"
                      >
                        <span className="mr-2">{solution.icon}</span>
                        {solution.title}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="mt-6 bg-gradient-to-br from-primary-navy to-primary-orange p-6 rounded-xl shadow-lg text-white">
                  <h3 className="text-lg font-bold mb-2">Need Help Choosing?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Not sure which solution is right for your business? Get a free consultation.
                  </p>
                  <Link href="/audit">
                    <Button variant="outline" size="sm" fullWidth className="border-white text-white hover:bg-white hover:text-primary-navy">
                      Get Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Solutions Content */}
            <div className="lg:col-span-2 space-y-8">
              {solutions.map((solution) => (
                <div
                  key={solution.id}
                  id={`solution-${solution.id}`}
                  className="bg-gray-50 rounded-xl shadow-lg overflow-hidden"
                >
                  <div className={`p-6 border-b-2 ${colorClasses[solution.color as keyof typeof colorClasses]}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">
                        {solution.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{solution.title}</h2>
                        <p className="text-gray-600">{solution.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {solution.longDescription}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Features</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <span className="w-4 h-4 bg-primary-teal/20 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <span className="w-4 h-4 bg-primary-orange/20 rounded-full flex items-center justify-center mr-2 text-xs">✨</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-primary-orange font-bold">{solution.price}</p>
                      </div>
                      <Link href={`/contact?solution=${solution.id}`}>
                        <Button variant="outline" size="sm" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare Our Solutions</h2>
            <p className="text-gray-600">Find the perfect fit for your business needs</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary-navy text-white">
                <tr>
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Starter</th>
                  <th className="p-4 text-center">Professional</th>
                  <th className="p-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'AI-Ready Website', starter: true, pro: true, enterprise: true },
                  { name: 'Cloudflare Pages Hosting', starter: true, pro: true, enterprise: true },
                  { name: 'Schema.org Markup', starter: true, pro: true, enterprise: true },
                  { name: 'Sales Funnels', starter: false, pro: true, enterprise: true },
                  { name: 'Client Portal', starter: false, pro: true, enterprise: true },
                  { name: 'Cloudflare Workers (5)', starter: false, pro: true, enterprise: true },
                  { name: 'Cloudflare Workers (20)', starter: false, pro: false, enterprise: true },
                  { name: 'D1 Database', starter: false, pro: true, enterprise: true },
                  { name: 'R2 Storage (10GB)', starter: false, pro: true, enterprise: true },
                  { name: 'R2 Storage (100GB)', starter: false, pro: false, enterprise: true },
                  { name: 'Email Automation', starter: false, pro: true, enterprise: true },
                  { name: 'Custom AI Workflows', starter: false, pro: false, enterprise: true },
                  { name: 'Full Automation Suite', starter: false, pro: false, enterprise: true },
                  { name: 'Priority Support', starter: false, pro: false, enterprise: true },
                  { name: 'Custom Integrations', starter: false, pro: false, enterprise: true },
                ].map((feature, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-4 text-gray-700">{feature.name}</td>
                    <td className="p-4 text-center">
                      {feature.starter ? (
                        <span className="text-primary-teal font-bold">✓</span>
                      ) : (
                        <span className="text-gray-400">−</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {feature.pro ? (
                        <span className="text-primary-teal font-bold">✓</span>
                      ) : (
                        <span className="text-gray-400">−</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {feature.enterprise ? (
                        <span className="text-primary-teal font-bold">✓</span>
                      ) : (
                        <span className="text-gray-400">−</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white">
                View Detailed Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
