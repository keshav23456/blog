/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#334155',
            h1: {
              fontWeight: '800',
              fontFamily: '"Merriweather", serif',
            },
            h2: {
              fontWeight: '700',
              fontFamily: '"Merriweather", serif',
            },
            h3: {
              fontWeight: '600',
              fontFamily: '"Merriweather", serif',
            },
            'article p': {
              fontFamily: '"Source Serif Pro", serif',
              fontSize: '1.125rem',
              lineHeight: '1.75',
            },
          },
        },
      },
      fontFamily: {
        serif: ['"Merriweather"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}