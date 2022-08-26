/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        DarkBlue: 'hsl(209, 23%, 22%)',
        VeryDarkBlue: 'hsl(207, 26%, 17%)',
        VeryDarkBlue: 'hsl(200, 15%, 8%)',
        DarkGray: 'hsl(0, 0%, 52%)',
        VeryLightGray: 'hsl(0, 0%, 98%)',
        White: 'hsl(0, 0%, 100%)',
      },

      fontFamily: {
        Nunito: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
