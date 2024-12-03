import type { Config } from 'tailwindcss'

export default {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#F5F5FA',
        dark: '#010B13',
        credit: "#FF0000",
        debit: '#0000FF',
        primary: "#ef4444",
        secodary: "#56B04A"
      },
    },
  },
  plugins: [],
} satisfies Config

