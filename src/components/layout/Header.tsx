'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-primary-navy/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-orange to-primary-teal rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CO</span>
            </div>
            <span className="text-white font-bold text-xl">ChiefOps</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white hover:text-primary-orange transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/audit">
              <Button variant="primary" size="sm" className="shadow-lg">
                Get Audit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <span className="text-2xl">×</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-navy/98 backdrop-blur-sm">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-4 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/audit"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 px-4"
            >
              <Button variant="primary" size="sm" fullWidth className="mt-4">
                Get Audit
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
