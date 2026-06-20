'use client';

import Image from 'next/image';

/**
 * Logo component — astronaut CHIEFOPS wordmark with reticle brandmark.
 * Uses chiefops-mark.svg (reticle + command brackets) as the icon.
 * Wordmark: CHIEF (charcoal/white) + OPS (orange).
 */
export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };
  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg md:text-xl',
    lg: 'text-xl md:text-2xl',
  };

  return (
    <div className="flex items-center gap-2">
      {/* Reticle brandmark SVG */}
      <div className={`${sizes[size]} shrink-0`}>
        <Image
          src="/chiefops-mark.svg"
          alt="ChiefOps"
          width={size === 'lg' ? 40 : size === 'md' ? 32 : 24}
          height={size === 'lg' ? 40 : size === 'md' ? 32 : 24}
          priority
          className="dark:invert"
        />
      </div>

      {/* Wordmark: CHIEF + OPS */}
      <span className={`font-display font-extrabold tracking-tight ${textSizes[size]}`}>
        <span className="text-charcoal dark:text-[#ECEDEF]">CHIEF</span>
        <span className="text-orange">OPS</span>
      </span>
    </div>
  );
}
