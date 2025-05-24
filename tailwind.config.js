/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0edff',
          200: '#c7ddff',
          300: '#9bc2ff',
          400: '#6a9eff',
          500: '#4076fc',
          600: '#2759f4',
          700: '#1e46e1',
          800: '#1f3ab7',
          900: '#1f3590',
        },
        healthyGreen: '#20c997',
        warningRed: '#ff5a5a',
        cautionOrange: '#ff9f43',
        lightBlue: '#4acaff',
        darkBlue: '#5955e8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}