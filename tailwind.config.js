/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        berry: 'rgb(var(--berry) / <alpha-value>)',
        band: 'rgb(var(--band) / <alpha-value>)',
        'band-fg': 'rgb(var(--band-fg) / <alpha-value>)',
        latte: 'rgb(var(--latte) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '70rem',
      },
      borderRadius: {
        arch: '999px 999px 28px 28px',
      },
    },
  },
  plugins: [],
}
