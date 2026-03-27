/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#838383',
        accent: '#333333',
        background: 'undefined',
        text: '#111111',
        'on-primary': '#ffffff',
        'on-secondary': '#ffffff',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Outfit', 'serif'],
        body: ['var(--font-body)', 'Source Serif 4', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
