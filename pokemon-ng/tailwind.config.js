const colors = require("tailwindcss");
module.exports = {
  purge: {
    enabled: process.env.WEBPACK_DEV_SERVER === 'true' && process.argv.join(' ').indexOf('build') !== -1,
    content: [
      "./src/**/*.{html,ts}",
      "./projects/**/*.{html,ts}"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      pokemonBlue: '#3d7dca',
      pokemonNavyBlue: '#003a70',
      pokemonYellow: '#ffcb05',
      pokemonGold:  '#b3a125',
      pokemonRed: '#ff0000',
      pokemonDarkRed: '#cc0000'
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
