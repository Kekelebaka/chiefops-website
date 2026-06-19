'use client';

/**
 * Astronaut Mascot — the single ChiefOps mascot.
 * Replacement for RobotMascot. Simple, brand-aligned, not distracting.
 */
import { useState } from 'react';

export function AstronautMascot() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex flex-col items-center transition-all duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Helmet */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-white border-4 border-orange shadow-lg shadow-orange/20 flex items-center justify-center">
          {/* Visor */}
          <div className="w-16 h-10 rounded-full bg-gradient-to-b from-orange to-orange-soft flex items-center justify-center">
            {/* Eyes */}
            <div className="flex gap-2">
              <div className={`h-2 w-2 rounded-full bg-white transition-all duration-300 ${isHovered ? 'w-3' : ''}`} />
              <div className={`h-2 w-2 rounded-full bg-white transition-all duration-300 ${isHovered ? 'w-3' : ''}`} />
            </div>
          </div>
        </div>

        {/* Antenna */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="w-1 h-4 bg-orange rounded-full" />
          <div className={`w-3 h-3 rounded-full bg-orange transition-all duration-300 ${isHovered ? 'animate-pulse' : ''}`} />
        </div>
      </div>

      {/* Body */}
      <div className="w-20 h-16 rounded-xl bg-white border-2 border-charcoal mt-1 flex items-center justify-center shadow-md">
        {/* Chest panel */}
        <div className="w-8 h-5 rounded bg-ink flex items-center justify-center">
          <div className="flex gap-0.5">
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isHovered ? 'bg-green-400' : 'bg-orange'}`} />
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 delay-75 ${isHovered ? 'bg-orange-soft' : 'bg-muted'}`} />
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 delay-150 ${isHovered ? 'bg-orange' : 'bg-muted'}`} />
          </div>
        </div>
      </div>

      {/* Arms */}
      <div className="absolute top-32 -left-4 w-8 h-12 rounded-l-xl bg-white border-2 border-charcoal -rotate-12 shadow-sm" />
      <div className="absolute top-32 -right-4 w-8 h-12 rounded-r-xl bg-white border-2 border-charcoal rotate-12 shadow-sm" />

      {/* Tagline */}
      <p className="mt-4 text-xs font-mono text-muted uppercase tracking-widest">
        Your Business&apos; OS
      </p>
    </div>
  );
}
