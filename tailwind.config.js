module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      xmd: '0px 4px 8px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0px 5px 13px rgba(0, 0, 0, 0.25);'
    },
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      dark: 'var(--Dark)',
      mediumDark: 'var(--Medium-dark)',
      medium: 'var(--Medium)',
      contrast: 'var(--Contrast)',
    },
    extend: {
      borderRadius: {
        tf: '25px',
        ft: '50px'
      },
      lineHeight: {
        '12': '3rem',
      },
      width: {
        '88': '22rem',
      },
    },
    fontFamily: {
      'smythe': ['Smythe', 'serif'],
    },
    fontSize: {
      'tiny': '.825rem',
      '2xl': '1.5rem',
    },
    maxWidth: {
      '96': '96px'
    },
    maxHeight: {
      '96': '96px'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}