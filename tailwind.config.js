/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-color': '#19A2F7'
      },
      padding: {
        '54px': '54px',
        '34px': '34px',
        '18px': '18px',
        '44px': '44px',
      },
      width: {
        '375px': '375px',
        '812px': '812px',
        '390px': '390px',
        '844px': '844px',
        '384px': '384px',
        '854px': '854px',
        '360px': '360px',
        '880px': '880px',
      }
    },
  },
  plugins: [],
}
