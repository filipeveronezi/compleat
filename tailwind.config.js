module.exports = {
  mode: 'jit',
  purge: [
    './src/modules/**/**/*.tsx',
    './src/modules/**/*.tsx',
    './src/modules/*.tsx',
    './src/components/**/**/*.tsx',
    './src/components/**/*.tsx',
    './src/components/*.tsx',
    './src/pages/**/*.tsx',
    './src/pages/*.tsx',
    './src/layout/*.tsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-green': '#95AD79',
        darkgray: '#807D6D',
        lightgray: '#E3DFC8',
        beige: '#F5F1DA',
        black: '#202020'
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        lato: ['Lato', 'sans-serif']
      },
      boxShadow: {
        emoji: '6px 6px 0px 2px #E3DFC8;'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
