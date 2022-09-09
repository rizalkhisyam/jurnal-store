/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0A263D',
        secondary: '#F2F4F7',
        grey: '#8B95A5',
        link: '#4B61DD',
        button: '#F7601A',
        screen: '#21228C'
      },
      height: {
        '400': '25rem',
        '300': '18rem',
        '152': '9.5rem',
        '812': '50.75rem'
      },
      width: {
        '152': '9.5rem'
      }
    },
  },
  plugins: [],
}
