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
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'bg-primary': '#d3d3d3',
        'bg-secondary': '#101010',
        'bg-card': '#f3f2f0',
        forest: '#1c4d30',
        gold: '#1c4d30',
        'gold-light': '#143824',
        cream: '#1c1c1c',
        muted: '#3f3d39',
        'gold-border': 'rgba(28,28,28,0.14)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
