/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand CI — the astronaut CHIEFOPS identity
        // Orange is the ONLY accent. Everything else is charcoal/ink/white.
        orange: '#F7811E',
        'orange-soft': '#FF9A42',
        charcoal: '#232323',
        ink: '#0E0F12',
        panel: '#16181D',
        offwhite: '#ECEDEF',
        muted: '#9A9DA6',
        line: { DEFAULT: 'rgba(255,255,255,0.08)' },
      },
      fontFamily: {
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(135deg, #F7811E 0%, #FF9A42 100%)',
      },
    },
  },
  plugins: [],
};
