/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { navy: '#0A2540', orange: '#FF6B35', teal: '#4ECDC4' },
        neutral: { light: '#F8F9FA', gray: '#666666' },
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
    },
  },
  plugins: [],
};
