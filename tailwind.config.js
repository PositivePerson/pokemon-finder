module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        '12': '3rem',
      }
    },
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      dark: 'var(--Dark)',
      mediumDark: 'var(--Medium-dark)',
      medium: 'var(--Medium)',
      contrast: 'var(--Contrast)',
    },
    fontSize: {
      'tiny': '.825rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}