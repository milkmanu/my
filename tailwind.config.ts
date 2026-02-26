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
        'uzb-primary': '#00B8D9',
        'uzb-accent':  '#00F2C7',
        'uzb-purple':  '#9933FF',
        'uzb-bg-top':  '#0A1428',
        'uzb-bg-bot':  '#002440',
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float-slow':   'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite reverse',
        'pulse-glow':   'pulseGlow 3s ease-in-out infinite',
        'slide-up':     'slideUp 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in':      'fadeIn 0.4s ease both',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px) scale(1)' },
          '50%':     { transform: 'translateY(-20px) scale(1.05)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':     { opacity: '1',   transform: 'scale(1.08)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
