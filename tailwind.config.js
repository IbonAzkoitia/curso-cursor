/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  safelist: [
    'hidden',
    'flex',
    'flex-col',
    'absolute',
    'top-20',
    'left-0',
    'right-0',
    'bg-white',
    'p-4',
    'shadow-md'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#516953',
        primaryDark: '#647966',
        secondary: '#2ecc71',
        accent: '#f39c12',
        dark: '#2c3e50',
        light: '#ecf0f1',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 