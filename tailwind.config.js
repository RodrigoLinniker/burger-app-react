/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    screens: {
      'sm': { 'min': '640px' },
      'md': { 'min': '768px' },
      'lg': { 'min': '1024px' },
      'xl': { 'min': '1280px' },
      'max-xl': { 'max': '1279px' },
      'max-lg': { 'max': '1023px' },
      'max-md': { 'max': '767px' },
      'max-sm': { 'max': '639px' },
    },
    extend: {
      fontFamily: {
        sans: 'Open Sans, sans-serif'
      },
      backgroundImage: {
        'fundoBurger': "url('/src/assets/bg.svg')",
      }
    },
  },
  plugins: [],
}
