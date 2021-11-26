module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#3fbaeb', // This will create a 'brand-light' color
          DEFAULT: '#0fa9e6', // This (must be the word DEFAULT - all uppercase) will create the 'brand' color
          dark: '#0c87b8', // This will create a 'brand-dark' color
        },
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
