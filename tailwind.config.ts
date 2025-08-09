import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '30em',   // 480px (Chakra sm)
      md: '48em',   // 768px (Chakra md)
      lg: '62em',   // 992px (Chakra lg)
      xl: '80em',   // 1280px (Chakra xl)
      '2xl': '96em' // 1536px
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-lora)'],
        lora: ['var(--font-lora)'],
      },
      maxWidth: {
        prose: '60ch',
      },
      spacing: {
        16: '4rem',
      },
      colors: {
        gray: {
          200: '#E2E8F0',
          500: '#A0AEC0',
          700: '#2D3748',
        },
        black: '#000000',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
} satisfies Config


