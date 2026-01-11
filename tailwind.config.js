/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3f0',
          100: '#e8e3dc',
          200: '#d4c8b8',
          300: '#bfa690',
          400: '#a8846a',
          500: '#8b6f4f',
          600: '#6f5840',
          700: '#5a4633',
          800: '#4a3a2a',
          900: '#3d2f22',
        },
        warm: {
          50: '#f7f5f3',
          100: '#e9e5e0',
          200: '#d3ccc2',
          300: '#b8ad9f',
          400: '#988c7a',
          500: '#7a6f5e',
          600: '#5c5449',
          700: '#4a453c',
          800: '#3a3630',
          900: '#2d2a25',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
