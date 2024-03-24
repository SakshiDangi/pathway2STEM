/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: {
          '200': '#7f35ff',
          '300': '#6004ff',
          '500': '#370097',
          '400': '#4e01d2',
          '600': '#6c1af9',
          '700': '#260166',
        },
        purple: {
          '500': '#8d4aff',
          '600': '#782bfd',
        },
        black: {
          "200": 'rgb(51, 51, 51)',
          '300': 'rgb(34, 34, 34)',
        },
        p1: {
          '500': 'rgb(255, 185, 1)',
        },
        p2: {
          '500': 'rgb(255, 149, 1)',
        },
        background: {
          '200': 'linear-gradient(135deg, #8d4aff, #370097 23.95%, #7f35ff 60.11%, #6004ff)',
          'yellow': {
            '500': 'linear-gradient(269deg, rgb(255, 185, 1) 17.08%, rgb(255, 149, 1) 100%)',
            '100': 'linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50.04%, rgba(255, 255, 255, 0.5) 50.85%)',
          },
        },
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.1) 0px 1px 1px 0px, rgba(0, 0, 0, 0.09) 0px 2px 2px 0px, rgba(0, 0, 0, 0.05) 0px 5px 3px 0px, rgba(0, 0, 0, 0.01) 0px 9px 4px 0px, rgba(0, 0, 0, 0) 0px 14px 4px 0px',
      }
    },
  },
  plugins: [],
}

