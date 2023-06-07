/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        y: '#ffe500',
        b: '#1a1a1a',
      }
    },
  },
  plugins: [],
}

