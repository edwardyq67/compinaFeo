/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mysin': {
          '50': '#fffaeb',
          '100': '#fff2c6',
          '200': '#ffe388',
          '300': '#ffce4a',
          '400': '#ffb71b',
          '500': '#f99607',
          '600': '#dd6f02',
          '700': '#b74d06',
          '800': '#943a0c',
          '900': '#7a300d',
          '950': '#461802',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
    },
  },
  plugins: [],
}

