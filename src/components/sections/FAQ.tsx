'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'What makes ChiefOps different from other web design agencies?',
      answer: 'ChiefOps doesn\'t just build websites – we build complete business operating systems. We focus on AI-ready, serverless-first architecture using Cloudflare\'s entire ecosystem, ensuring your digital presence is fast, scalable, and future-proof.',
    },
    {
      id: 2,
      question: 'Do I need any technical knowledge to use ChiefOps?',
      answer: 'Absolutely not! We handle everything from development to deployment. You get a complete, ready-to-use system without needing to understand the technical details. Of course, if you\'re technical, you\'ll appreciate our clean, well-documented code.',
    },
    {
      id: 3,
      question: 'How does the Cloudflare-centric approach benefit my business?',
      answer: 'Cloudflare provides global CDN, DDoS protection, serverless computing, database, storage, and email services – all in one platform. This means faster load times, better security, lower costs, and easier management compared to traditional hosting.',
    },
    {
      id: 4,
      question: 'What is Schema.org markup and why does it matter?',
      answer: 'Schema.org markup is structured data that helps search engines understand your content better. This improves your SEO, makes your site eligible for rich snippets in search results, and is crucial for voice search and AI assistants.',
    },
    {
      id: 5,
      question: 'Can you migrate my existing website to ChiefOps?',
      answer: 'Yes! We offer migration services to move your existing website to our platform. We\'ll preserve your SEO rankings, migrate your content, and ensure a smooth transition with zero downtime.',
    },
    {
      id: 6,
      question: 'How do the email services work without traditional hosting?',
      answer: 'We use Cloudflare Email Routing for inbound emails, which forwards messages to Cloudflare Workers for processing. Outbound emails use Cloudflare\'s Email Service. This eliminates the need for traditional email hosting while providing full functionality.',
    },
    {
      id: 7,
      question: 'What kind of support do you offer?',
      answer: 'All plans include email support. Professional and Enterprise plans include priority support, and Enterprise includes dedicated account management. We\'re here to ensure your system runs smoothly.',
    },
    {
      id: 8,
      question: 'Is there a contract or can I cancel anytime?',
      answer: 'There are no long-term contracts. You can cancel your subscription at any time. Plus, we offer a 30-day money-back guarantee on all plans.',
    },
    {
      id: 9,
      question: 'Do you offer custom development?',
      answer: 'Yes! Beyond our standard plans, we offer custom development services for unique business requirements. Contact us to discuss your specific needs.',
    },
    {
      id: 10,
      question: 'How fast can you deliver my website?',
      answer: 'Simple websites can be delivered in as little as 7-10 business days. More complex systems with custom features typically take 2-4 weeks. We\'ll provide a detailed timeline after our initial consultation.',
    },
  ];

  const toggleFAQ = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary-teal text-white text-sm font-semibold rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked {' '}
            <span className="text-primary-orange">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We\'ve got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <span className={`text-primary-orange text-2xl transition-transform duration-200 ${expanded === faq.id ? 'rotate-180' : ''}`}>
                  {expanded === faq.id ? '−' : '+'}
                </span>
              </button>
              <div
                className={`px-6 pb-6 transition-all duration-300 overflow-hidden ${
                  expanded === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white">
                Contact Us
              </Button>
            </Link>
            <Link href="/audit">
              <Button variant="primary" size="lg" className="shadow-lg">
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
