/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'grotesk': ['Space Grotesk', 'sans-serif']
      },
      colors: {
        'azul': '#0113b6',
        'naranja': '#ff0000'
      },
      screens: {
        'xs': '360px',
      },



    },
  },
  plugins: [
    require('flowbite/plugin')
],
}
