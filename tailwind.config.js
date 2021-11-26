module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#0fa9e6',
        'brand-light': '#3fbaeb',
        'brand-dark': '#0c87b8',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};

// By default, 'theme' will inherit the default tailwind theme
