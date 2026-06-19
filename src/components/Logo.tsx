'use client';

/**
 * Logo component — astronaut CHIEFOPS wordmark.
 * Displays either the PNG astronaut image or falls back to the SVG wordmark.
 */
export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  return (
    <div className="flex items-center gap-2">
      {/* Astronaut PNG logo — primary brand asset */}
      <div className={`${sizes[size]} shrink-0 rounded-lg bg-gradient-to-br from-orange to-orange-soft flex items-center justify-center overflow-hidden`}>
        <span className="text-white font-bold text-lg font-display">CO</span>
      </div>

      {/* Wordmark: CHIEF in charcoal/white, OPS in orange with reticle "O" */}
      <span className="font-display font-extrabold tracking-tight text-lg md:text-xl">
        <span className="text-charcoal dark:text-white">CHIEF</span>
        <span className="text-orange">OPS</span>
      </span>
    </div>
  );
}
