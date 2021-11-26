module.exports = {
  purge: ['./src/**/*.jsx', './index.html'], // The '**' means to look in any sub directory, then the '*' means any '.jsx' file
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#3fbaeb',
          DEFAULT: '#0fa9e6',
          dark: '#0c87b8',
        },
      },
      fontFamily: {
        headline: 'Poppins, sans-serif', // This will create a 'font-headline' class that uses the 'Poppins' font
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
