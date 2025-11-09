/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#0078d4',
        'primary-hover': '#106ebe',
        'primary-dark': '#2ea0ff',
        'primary-dark-hover': '#5eb5ff',
      },
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}