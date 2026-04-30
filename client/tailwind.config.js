/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d6a4f',
        light: '#52b788',
        accent: '#95d5b2',
        dark: '#1b4332',
        textDark: '#1a1a2e',
        textMuted: '#6b7280'
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
