import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C83C5', // logo blue
        // Darkest-needed shade of primary, behind any small white text (4.52:1 with white; primary
        // is 4.12, enough only for large text, icons and decoration)
        'primary-strong': '#1B7CBB',
        'primary-strong-hover': '#1872AB', // 5.21:1 with white
        'primary-dark': '#14699a',
        'primary-100': '#cce5f1',
        accent: '#D77828', // logo orange (was var(--accent); no accent-* class was in use)
        // Orange for small text: 5.13:1 on white, 4.54:1 on the #FBEFE4 peach. accent is 3.18 on
        // white, so as text it has to be large (24px, or 18.66px bold)
        'accent-strong': '#A45B1E',
        navy: '#0B1B2B',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

