'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Pricing() {
  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: '$299',
      period: '/month',
      features: [
        'AI-Ready Website',
        'Mobile-First Design',
        'Schema.org Markup',
        'Cloudflare Pages Hosting',
        'Basic Analytics',
        'Email Setup (Cloudflare)',
        'Up to 10 Pages',
      ],
      popular: false,
      buttonText: 'Get Started',
      buttonVariant: 'outline' as const,
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'For growing businesses with automation needs',
      price: '$799',
      period: '/month',
      features: [
        'Everything in Starter',
        'Sales Funnel System',
        'Client Portal',
        'Cloudflare Workers (5)',
        'D1 Database',
        'R2 Storage (10GB)',
        'Email Automation',
        'Unlimited Pages',
      ],
      popular: true,
      buttonText: 'Most Popular',
      buttonVariant: 'primary' as const,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete business operating system',
      price: '$1,999',
      period: '/month',
      features: [
        'Everything in Professional',
        'Custom AI Workflows',
        'Full Automation Suite',
        'Cloudflare Workers (20)',
        'D1 Database (Pro)',
        'R2 Storage (100GB)',
        'Priority Support',
        'Custom Integrations',
      ],
      popular: false,
      buttonText: 'Contact Sales',
      buttonVariant: 'secondary' as const,
    },
  ];

  const oneTimeServices = [
    { name: 'Website Audit', price: '$499', description: 'Comprehensive audit of your current digital presence' },
    { name: 'Migration Service', price: '$999', description: 'Move your existing site to ChiefOps OS' },
    { name: 'Custom Development', price: 'Custom', description: 'Tailored solutions for unique business needs' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary-orange text-white text-sm font-semibold rounded-full mb-4">
            PRICING
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent {' '}
            <span className="text-primary-navy">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees. No long-term contracts. Just powerful tools to grow your business.
          </p>
        </div>

        {/* Monthly Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl shadow-lg p-8 relative transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-primary-orange ring-opacity-50 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-primary-navy">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-5 h-5 bg-primary-teal/20 rounded-full flex items-center justify-center mr-3 text-xs">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={`/signup?plan=${plan.id}`} className="block">
                <Button
                  variant={plan.buttonVariant}
                  size="lg"
                  fullWidth
                  className={plan.popular ? 'shadow-lg' : ''}
                >
                  {plan.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* One-Time Services */}
        <div className="bg-primary-navy rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            One-Time Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {oneTimeServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                <p className="text-white/80 text-sm mb-4">{service.description}</p>
                <p className="text-2xl font-bold text-primary-orange">{service.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Money-Back Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-primary-teal/10 p-4 rounded-xl">
            <span className="w-8 h-8 bg-primary-teal rounded-full flex items-center justify-center mr-3 text-white font-bold">✓</span>
            <span className="text-primary-navy font-semibold">
              30-Day Money-Back Guarantee. No questions asked.
            </span>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Not sure which plan is right for you?
          </p>
          <Link href="/audit">
            <Button variant="outline" size="lg" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white">
              Get a Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
