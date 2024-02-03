import type { Config } from 'tailwindcss'

export default {
   darkMode : 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#F0F8FF',
        dark: '#111111',
        primary: 'rgb(var(--color-primary) / var(--color-transparency))',
      },
    },
  },
  plugins: [],
} satisfies Config

