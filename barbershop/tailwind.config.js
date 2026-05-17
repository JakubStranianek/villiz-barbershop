/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'bg-primary': '#1a1a18',
        'bg-secondary': '#242420',
        'bg-card': '#2e2e28',
        forest: '#2d4a32',
        gold: '#c8a97e',
        'gold-light': '#e0c49a',
        cream: '#f5f0e8',
        muted: '#8a8678',
        'gold-border': 'rgba(200,169,126,0.25)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
