const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

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
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in forwards',
        slideInLeft: 'slideInLeft 0.5s ease-in forwards',
        zoomIn: 'zoomIn 2s ease-in forwars'
      },
      keyframes: {
        slideInLeft: {
          '0%': { opacity: 0, left: '-100px' },
          '100%': { opacity: 1, left: 0 }
        },
        zoomIn: {
          '0%': { scale: 0 },
          '100%': { scale: 1 }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    }
  },
  variants: {
    animation: ['motion-safe'],
    extend: {}
  },
  plugins: []
}
