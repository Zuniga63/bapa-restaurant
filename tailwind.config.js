/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
        display: ['Lora', 'serif', ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        back: '-1',
        fixed: '100',
        modal: '1000',
        preload: '1100',
      },
      colors: {
        'defaul-body': '#0d1117',
        'gray-dark': '#343a40',
        'yellow-light': '#f1c40f',
        'golden-rod': '#c99d35',
        dark: '#212529',
        light: '#f8f9fa',
        'dark-header': '#161b22',
        'btn-bg': '#21262d',
      },
      gridTemplateColumns: {
        'nav-item': 'auto 1fr auto',
        'auto-fr': 'auto 1fr',
      },
      screens: {
        '3xl': '1920px',
      },
      backgroundImage: {
        'dark-eclipse':
          'radial-gradient(circle,_rgba(37,37,37,0.9),_rgba(44,44,44,0.9),_rgba(18,18,18,0.9))',
        'product-list':
          "url('https://res.cloudinary.com/dr8snppzz/image/upload/v1732939620/BAPA/bg-bapa-products_c2vco4.webp')",
      },
    },
  },
  plugins: ['prettier'],
};
