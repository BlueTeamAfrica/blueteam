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
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      keyframes: {
        // Oracom-style smooth fade up with subtle scale
        fadeUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px) scale(0.98)',
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) scale(1)',
          },
        },
        // Smooth fade in (for buttons)
        fadeIn: {
          '0%': { 
            opacity: '0',
          },
          '100%': { 
            opacity: '1',
          },
        },
        // Subtle scale on hover
        scaleIn: {
          '0%': { 
            transform: 'scale(0.95)',
            opacity: '0',
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'gradient-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.3)', opacity: '0.4' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        // Oracom-style smooth animations with staggered delays
        fadeUp: 'fadeUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'fadeUp-delay-200': 'fadeUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards',
        'fadeUp-delay-400': 'fadeUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards',
        'fadeUp-delay-600': 'fadeUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards',
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        'scaleIn': 'scaleIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'gradient-move': 'gradient-move 15s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
export default config

