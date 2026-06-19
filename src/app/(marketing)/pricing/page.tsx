'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { pricingData, groups, PricingItem } from '@/lib/pricing';

export default function PricingPage() {
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
            ? 'border-orange shadow-orange/10'
            : 'border-line hover:border-orange/30'
        } bg-white`}
      >
        {item.popular && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
            Most Popular
          </span>
        )}

        <h3 className="font-display font-bold text-lg mb-1">{item.name}</h3>
        {item.subtitle && (
          <p className="text-xs text-muted mb-2">{item.subtitle}</p>
        )}

        <p className="font-display font-extrabold text-2xl text-orange mb-2">{price}</p>

        <p className="text-sm text-charcoal/70 mb-4">{item.description}</p>

        {item.features && (
          <ul className="space-y-1.5 mb-6">
            {item.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-charcoal/80">
                <span className="text-orange mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
        )}

        <Link
          href={item.href || '/audit'}
          className="block w-full text-center rounded-lg bg-orange px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-orange-soft hover:shadow-lg hover:shadow-orange/20"
        >
          {item.cta || 'Get a ChiefOps Audit'}
        </Link>
      </div>
    );
  };

  const renderGroup = (key: 'audit' | 'build' | 'retain') => {
    const group = groups[key];
    const items = pricingData.filter((p) => p.tier === key);
    if (items.length === 0) return null;

    return (
      <div key={key} className="mb-16" id={`pricing-${key}`}>
        <div className="text-center mb-8">
          <p className="eyebrow mb-2">{group.label}</p>
          <p className="text-sm text-muted">{group.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(renderCard)}
        </div>
      </div>
    );
  };

  return (
    <div className="section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-3xl sm:text-4xl mb-4">Pricing</h1>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Every build starts with an audit. ZAR or USD — switch any time.
          </p>

          {/* Currency toggle */}
          <button
            onClick={toggleCurrency}
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-mono font-bold transition-all hover:border-orange/50"
          >
            <span className={currency === 'ZAR' ? 'text-orange' : 'text-muted'}>ZAR</span>
            <span className="text-muted">/</span>
            <span className={currency === 'USD' ? 'text-orange' : 'text-muted'}>USD</span>
          </button>

          <p className="mt-4 text-xs text-muted">
            Final pricing depends on scope — every build starts with an audit. 30-day guarantee.
          </p>
        </div>

        {/* Pricing groups */}
        {renderGroup('audit')}
        {renderGroup('build')}
        {renderGroup('retain')}

        {/* Trust note */}
        <div className="text-center mt-12 p-6 rounded-xl border border-line bg-offwhite/50">
          <p className="text-sm text-muted">
            Need something custom? <Link href="/contact" className="text-orange hover:underline">Get in touch</Link> — we&apos;ll scope it with an audit first.
          </p>
        </div>
      </div>
    </div>
  );
}
