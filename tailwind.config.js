module.exports = {
  mode: 'jit',
  purge: [
    './src/components/**/**/*.tsx',
    './src/components/**/*.tsx',
    './src/components/*.tsx',
    './src/pages/**/*.tsx',
    './src/pages/*.tsx'
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
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
