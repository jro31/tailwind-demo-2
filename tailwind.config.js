module.exports = {
  purge: {
    enabled: true, // This would mean that 'purge' always runs (even when you run a build in development). Could also be set to 'false' (to never run) or, apparently, anything else...
    content: ['./src/**/*.jsx', './index.html'],
    options: {
      // See 'https://purgecss.com/configuration.html#options' for what could go here
      // For example 'safelist', to which you would add the classes that you never want to purge, even if they can't be found
    },
  },
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
        headline: 'Poppins, sans-serif',
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
