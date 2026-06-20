'use client';

import { useState, FormEvent } from 'react';

const STATICFORMS_KEY = 'sf_a081d889bc563943b3557aff';
const STATICFORMS_ENDPOINT = 'https://api.staticforms.dev/submit';

export default function AuditForm() {
  const [form, setForm] = useState({
    businessName: { value: '', error: '' },
    email: { value: '', error: '' },
    phone: { value: '', error: '' },
    industry: { value: '', error: '' },
    websiteUrl: { value: '', error: '' },
    biggestPainPoint: { value: '', error: '' },
    revenueRange: { value: '', error: '' },
    heardAboutUs: { value: '', error: '' },
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: { ...prev[field as keyof typeof prev], value, error: '' } }));
  };

  const validate = () => {
    let valid = true;
    const required: (keyof typeof form)[] = ['businessName', 'email', 'biggestPainPoint'];
    for (const f of required) {
      if (!form[f].value.trim()) {
        setForm((prev) => ({ ...prev, [f]: { ...prev[f], error: 'Required' } }));
        valid = false;
      }
    }
    if (form.email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value)) {
      setForm((prev) => ({ ...prev, email: { ...prev.email, error: 'Valid email required' } }));
      valid = false;
    }
    return valid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch(STATICFORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accessKey: STATICFORMS_KEY,
          subject: `New ChiefOps Audit — ${form.businessName.value}`,
          fromName: 'ChiefOps Audit Form',
          businessName: form.businessName.value,
          email: form.email.value,
          phone: form.phone.value,
          industry: form.industry.value,
          websiteUrl: form.websiteUrl.value,
          biggestPainPoint: form.biggestPainPoint.value,
          revenueRange: form.revenueRange.value,
          heardAboutUs: form.heardAboutUs.value,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm({
          businessName: { value: '', error: '' },
          email: { value: '', error: '' },
          phone: { value: '', error: '' },
          industry: { value: '', error: '' },
          websiteUrl: { value: '', error: '' },
          biggestPainPoint: { value: '', error: '' },
          revenueRange: { value: '', error: '' },
          heardAboutUs: { value: '', error: '' },
        });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again or WhatsApp us.');
    }
  };

  if (status === 'success') {
    return (
      <div className="section-light flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="font-display font-bold text-2xl mb-2">Audit Request Received</h1>
          <p className="text-charcoal/70 mb-6">
            Thanks for reaching out. We&apos;ll review your details and get back to you within 24 hours.
          </p>
          <div className="space-y-3">
            <a
              href="/audit"
              className="block text-center rounded-lg bg-orange px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-orange-soft"
            >
              Submit Another Audit
            </a>
            <a
              href="/"
              className="block text-center text-sm text-muted hover:text-orange transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Get a ChiefOps Audit
          </h1>
          <p className="text-lg text-charcoal/70">
            Tell us about your business. We&apos;ll show you what to fix first.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Business Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Business Name <span className="text-orange">*</span>
            </label>
            <input
              type="text"
              required
              value={form.businessName.value}
              onChange={(e) => update('businessName', e.target.value)}
              className={`w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange ${
                form.businessName.error ? 'border-red-500' : 'border-line'
              }`}
              placeholder="Your business name"
            />
            {form.businessName.error && (
              <p className="text-xs text-red-500 mt-1">{form.businessName.error}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email <span className="text-orange">*</span>
            </label>
            <input
              type="email"
              required
              value={form.email.value}
              onChange={(e) => update('email', e.target.value)}
              className={`w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange ${
                form.email.error ? 'border-red-500' : 'border-line'
              }`}
              placeholder="you@business.co.za"
            />
            {form.email.error && (
              <p className="text-xs text-red-500 mt-1">{form.email.error}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">WhatsApp / Phone</label>
            <input
              type="tel"
              value={form.phone.value}
              onChange={(e) => update('phone', e.target.value)}
              className="w-full rounded-lg border border-line px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange"
              placeholder="+27 XX XXX XXXX"
            />
          </div>

          {/* Industry */}
          <div>
            <label className="block text-sm font-medium mb-1">Industry</label>
            <input
              type="text"
              value={form.industry.value}
              onChange={(e) => update('industry', e.target.value)}
              className="w-full rounded-lg border border-line px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange"
              placeholder="e.g. Retail, Education, Construction"
            />
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm font-medium mb-1">Website (if any)</label>
            <input
              type="url"
              value={form.websiteUrl.value}
              onChange={(e) => update('websiteUrl', e.target.value)}
              className="w-full rounded-lg border border-line px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange"
              placeholder="https://yourbusiness.co.za"
            />
          </div>

          {/* Biggest Pain Point */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Biggest Pain Point <span className="text-orange">*</span>
            </label>
            <textarea
              required
              rows={3}
              value={form.biggestPainPoint.value}
              onChange={(e) => update('biggestPainPoint', e.target.value)}
              className={`w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange ${
                form.biggestPainPoint.error ? 'border-red-500' : 'border-line'
              }`}
              placeholder="What&apos;s the one thing keeping you up at night?"
            />
            {form.biggestPainPoint.error && (
              <p className="text-xs text-red-500 mt-1">{form.biggestPainPoint.error}</p>
            )}
          </div>

          {/* Revenue Range */}
          <div>
            <label className="block text-sm font-medium mb-1">Annual Revenue Range</label>
            <select
              value={form.revenueRange.value}
              onChange={(e) => update('revenueRange', e.target.value)}
              className="w-full rounded-lg border border-line px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange bg-white"
            >
              <option value="">Select range</option>
              <option value="under-500k">Under R500k</option>
              <option value="500k-2m">R500k – R2m</option>
              <option value="2m-10m">R2m – R10m</option>
              <option value="10m-50m">R10m – R50m</option>
              <option value="50m-plus">R50m+</option>
            </select>
          </div>

          {/* Heard About Us */}
          <div>
            <label className="block text-sm font-medium mb-1">How did you hear about us?</label>
            <input
              type="text"
              value={form.heardAboutUs.value}
              onChange={(e) => update('heardAboutUs', e.target.value)}
              className="w-full rounded-lg border border-line px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange"
              placeholder="Referral, Google, social media..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full rounded-lg bg-orange px-6 py-3 text-sm font-bold text-white transition-all hover:bg-orange-soft hover:shadow-lg hover:shadow-orange/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Submitting...' : 'Get My ChiefOps Audit'}
          </button>

          {/* Error message */}
          {status === 'error' && errorMsg && (
            <p className="text-sm text-red-500 text-center">{errorMsg}</p>
          )}

          {/* Note */}
          <p className="text-xs text-muted text-center">
            Every build starts with an audit. Final pricing depends on scope.
          </p>
        </form>
      </div>
    </div>
  );
}
