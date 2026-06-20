'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { pricingData, groups as pricingGroups, PricingItem } from '@/lib/pricing';

// Convert groups object to array for rendering
const groupEntries = Object.entries(pricingGroups).map(([key, value]) => ({
  id: key,
  title: value.label,
  subtitle: value.subtitle,
  items: pricingData.filter((item) => item.tier === key),
}));

export default function PricingClient() {
  const [currency, setCurrency] = useState<'ZAR' | 'USD'>('ZAR');

  useEffect(() => {
    const saved = localStorage.getItem('chiefops-currency') as 'ZAR' | 'USD' | null;
    if (saved && (saved === 'ZAR' || saved === 'USD')) {
      setCurrency(saved);
    }
  }, []);

  const toggleCurrency = () => {
    const next = currency === 'ZAR' ? 'USD' : 'ZAR';
    setCurrency(next);
    localStorage.setItem('chiefops-currency', next);
  };

  const renderCard = (item: PricingItem) => {
    const price = currency === 'ZAR' ? item.priceZAR : item.priceUSD;

    return (
      <div
        key={item.name}
        className={`relative rounded-xl border-2 p-6 transition-all duration-200 hover:shadow-lg ${
          item.popular
            ? 'border-orange shadow-lg shadow-orange/20'
            : 'border-line hover:border-orange/50'
        }`}
      >
        {item.popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange px-3 py-1 text-xs font-bold text-white">
            Most Popular
          </div>
        )}

        <h3 className="font-display font-bold text-xl mb-2">{item.name}</h3>
        <p className="text-sm text-charcoal/70 mb-4">{item.description}</p>

        <div className="mb-4">
          <span className="text-3xl font-bold">
            {currency === 'ZAR' ? 'R' : '$'}
            {price}
          </span>
        </div>

        {item.features && item.features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {item.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-orange mt-0.5">●</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <Link
          href={item.href || '/audit'}
          className={`block text-center rounded-lg px-6 py-2.5 text-sm font-bold transition-all ${
            item.popular
              ? 'bg-orange text-white hover:bg-orange-soft'
              : 'bg-gray-100 text-charcoal hover:bg-gray-200'
          }`}
        >
          {item.cta || 'Get Started'}
        </Link>
      </div>
    );
  };

  return (
    <div className="section-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Transparent Pricing
          </h1>
          <p className="text-lg text-charcoal/70 mb-6">
            Every build starts with an audit. Pick your tier — switch on what you need now.
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center gap-3 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setCurrency('ZAR')}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${
                currency === 'ZAR'
                  ? 'bg-white text-orange shadow-sm'
                  : 'text-charcoal/70 hover:text-charcoal'
              }`}
            >
              ZAR (R)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-white text-orange shadow-sm'
                  : 'text-charcoal/70 hover:text-charcoal'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="space-y-12">
          {groupEntries.map((group) => (
            <div key={group.id}>
              <h2 className="font-display font-bold text-2xl mb-6">{group.title}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map(renderCard)}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16 text-center">
          <h2 className="font-display font-bold text-2xl mb-4">Questions?</h2>
          <p className="text-charcoal/70 mb-6">
            Not sure which tier you need? Book a free audit and we&apos;ll recommend the right fit.
          </p>
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 rounded-lg bg-orange px-6 py-3 text-sm font-bold text-white transition-all hover:bg-orange-soft hover:shadow-lg hover:shadow-orange/20"
          >
            Get a Free Audit
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
