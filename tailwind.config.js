/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eefbf1',
          100: '#d4f4dd',
          200: '#a9e9bc',
          500: '#2f9f5b',
          600: '#25804a',
          700: '#1d653b',
        },
        soil: {
          100: '#f4ede7',
          300: '#dbc3ae',
          500: '#9f7552',
          700: '#724e32',
        },
        leaf: {
          100: '#eaf7ee',
          500: '#4fa76f',
          700: '#2f7f4f',
        },
        lagoon: {
          100: '#ddf8f6',
          300: '#8fe4de',
          500: '#1ba89b',
          700: '#126c66',
        },
        sun: {
          100: '#fff4dd',
          300: '#ffd27a',
          500: '#f4a63a',
          700: '#bd6f1c',
        },
      },
    },
  },
  plugins: [],
}
