/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        'mdd': '825px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}

