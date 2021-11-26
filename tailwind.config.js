module.exports = {
  purge: ['./src/**/*.jsx', './index.html'],
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

// 'purge' is not smart; it scans the specified files and looks speficially for any text strings that match tailwind class names
// Even having a string that is not a css class, for example '<p>h-32 w-32</p>', will be enough to have the 'h-32' and 'w-32' classes included in the build css file
// HOWEVER, because it no longer finds 'h-32' and 'w-32' in 'DestinationCard.jsx' (because it's been updated to 'h-${size}' and 'w-${size}', it will NOT include the 'h-32' and 'w-32' classes in the final build)
