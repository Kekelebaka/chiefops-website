'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function ChiefOpsOS() {
  const [activeFeature, setActiveFeature] = useState('AI-Powered');

  const features = [
    {
      id: 'AI-Powered',
      title: 'AI-Powered',
      description: 'Built with artificial intelligence at the core, our systems learn and adapt to optimize performance continuously.',
      icon: '⚡',
    },
    {
      id: 'Cloudflare-Centric',
      title: 'Cloudflare-Centric',
      description: 'Leveraging Cloudflare\'s global network for lightning-fast performance, security, and reliability.',
      icon: '☁️',
    },
    {
      id: 'Serverless-First',
      title: 'Serverless-First',
      description: 'No servers to manage. Scale automatically, pay only for what you use, and enjoy zero maintenance.',
      icon: '🚀',
    },
    {
      id: 'Mobile-Optimized',
      title: 'Mobile-Optimized',
      description: 'Designed for the mobile-first world. Your system works perfectly on any device, anywhere.',
      icon: '📱',
    },
    {
      id: 'Machine-Readable',
      title: 'Machine-Readable',
      description: 'Schema.org markup ensures search engines understand your content, improving SEO and discoverability.',
      icon: '🔍',
    },
    {
      id: 'Conversion-Focused',
      title: 'Conversion-Focused',
      description: 'Every element is designed to convert visitors into leads, and leads into paying customers.',
      icon: '🎯',
    },
  ];

  const architecture = [
    { layer: 'Frontend', tech: 'Next.js + Tailwind', description: 'Modern, fast, and beautiful user interfaces' },
    { layer: 'Hosting', tech: 'Cloudflare Pages', description: 'Global CDN for instant loading worldwide' },
    { layer: 'Backend', tech: 'Cloudflare Workers', description: 'Serverless functions at the edge' },
    { layer: 'Database', tech: 'Cloudflare D1', description: 'SQL database with global low-latency access' },
    { layer: 'Storage', tech: 'Cloudflare R2', description: 'S3-compatible object storage, no egress fees' },
    { layer: 'Email', tech: 'Cloudflare Email Routing + Workers', description: 'Full email infrastructure, no traditional hosting needed' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary-navy text-white text-sm font-semibold rounded-full mb-4">
            THE CHIEFOPS OS
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Not Just a Website, a {' '}
            <span className="text-primary-orange">Complete Operating System</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every component is designed to work together seamlessly, creating a cohesive digital ecosystem for your business.
          </p>
        </div>

        {/* Features Tabs */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFeature === feature.id
                    ? 'bg-primary-orange text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{feature.icon}</span>
                {feature.title}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary-navy to-primary-orange p-1 rounded-2xl shadow-xl">
            <div className="bg-white p-8 rounded-2xl">
              {features.find(f => f.id === activeFeature) && (
                <div className="flex items-start gap-4">
                  <div className="text-4xl">
                    {features.find(f => f.id === activeFeature)!.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {features.find(f => f.id === activeFeature)!.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {features.find(f => f.id === activeFeature)!.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-gradient-to-br from-primary-navy via-primary-orange to-primary-teal p-8 rounded-2xl shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              Cloudflare-Powered Architecture
            </h3>
            <p className="text-white/80">
              Zero traditional hosting, maximum performance and reliability
            </p>
          </div>

          <div className="space-y-4">
            {architecture.map((layer, index) => (
              <div
                key={layer.layer}
                className={`flex items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm ${
                  index === 0 ? 'bg-primary-orange/20' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl font-bold text-white mr-4">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white">{layer.layer}</h4>
                  <p className="text-white/80 text-sm">{layer.description}</p>
                </div>
                <div className="text-right">
                  <code className="bg-white/20 px-3 py-1 rounded-lg text-white text-sm">
                    {layer.tech}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/architecture">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-navy">
              View Technical Architecture
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
