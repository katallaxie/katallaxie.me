const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    purgeLayersByDefault: true
  },
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
