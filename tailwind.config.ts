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
        primary: '#1982c4',
        'primary-dark': '#14699a',
        'primary-light': '#4da3d9',
        'primary-50': '#e6f2f8',
        'primary-100': '#cce5f1',
        secondary: '#D97706',
        background: '#F8FAFC',
        surface: '#FFFFFF',
        dark: '#0F172A',
        muted: '#64748B',
        // Keep for backward compatibility
        foreground: 'var(--foreground)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
export default config

