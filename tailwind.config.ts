/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,css}',
    './components/**/*.{js,ts,jsx,tsx,mdx,css}',
    './app/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f8f5f0',
        'light-cream': '#fdfbf7',
        'dark-cream': '#efe8dc',
        'light-brown': '#a89985',
        'medium-brown': '#8a7968',
        'dark-brown': '#5c4f3f',
        accent: '#e6a4b4',
        'accent-light': '#f5d6dd',
      },
    },
  },
  plugins: [],
}
