/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,tsx,jsx}',
    './components/**/*.{js,ts,tsx,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          100: '#DCD7C9',
          200: '#DEA057',
          300: '#A27B5C',
          400: '#3F4E4F',
          500: '#2C3639'
        }
      },
      screens: {
        '3xl': '1850px'
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}

