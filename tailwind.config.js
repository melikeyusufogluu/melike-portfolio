/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        win: {
          desktop: '#008080',
          gray: '#c0c0c0',
          grayDark: '#808080',
          grayDarker: '#404040',
          white: '#ffffff',
          navy: '#000080',
          navyLight: '#1084d0',
          black: '#000000',
        },
      },
      fontFamily: {
        sans: ['Tahoma', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
}
