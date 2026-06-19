'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Solutions() {
  const solutions = [
    {
      id: 1,
      title: 'AI-Ready Websites',
      description: 'High-performance, mobile-first websites that load in milliseconds and convert visitors into leads.',
      features: ['Cloudflare Pages', 'Serverless Architecture', 'SEO Optimized', 'Schema.org Markup'],
      icon: '🌐',
      color: 'from-primary-orange to-yellow-400',
      bgColor: 'bg-primary-orange/10',
    },
    {
      id: 2,
      title: 'Sales Funnels',
      description: 'Automated sales pipelines that nurture leads and close deals while you sleep.',
      features: ['Email Automation', 'SMS Integration', 'CRM Sync', 'Analytics Dashboard'],
      icon: '📈',
      color: 'from-primary-teal to-blue-400',
      bgColor: 'bg-primary-teal/10',
    },
    {
      id: 3,
      title: 'Client Portals',
      description: 'Self-service portals where clients can access documents, make payments, and track progress.',
      features: ['Secure Authentication', 'Document Management', 'Payment Integration', 'Real-time Updates'],
      icon: '🔐',
      color: 'from-primary-navy to-indigo-400',
      bgColor: 'bg-primary-navy/10',
    },
    {
      id: 4,
      title: 'Automation Systems',
      description: 'AI-powered workflows that eliminate manual tasks and reduce operational costs.',
      features: ['Workflows', 'AI Assistants', 'RPA Bots', 'Integrations'],
      icon: '🤖',
      color: 'from-purple-400 to-pink-400',
      bgColor: 'bg-purple-400/10',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary-teal text-white text-sm font-semibold rounded-full mb-4">
            OUR SOLUTIONS
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-primary-navy">ChiefOps Operating System</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We build the digital infrastructure your business needs to scale, automate, and dominate your market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${solution.bgColor}`}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                      <span className="w-4 h-4 bg-primary-teal/20 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={`/solutions#${solution.id}`}>
                  <Button variant="outline" size="sm" fullWidth className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/solutions">
            <Button variant="primary" size="lg" className="shadow-lg">
              View All Solutions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
