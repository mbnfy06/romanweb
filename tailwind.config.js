/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        roman: {
          dark: '#0a0a0a',
          card: '#171717',
          border: '#262626',
          primary: '#2563EB', // Vivid Blue
          accent: '#3B82F6',  // Lighter Blue
          text: '#E5E5E5',
          muted: '#A3A3A3',
          red: '#EF4444',     // For alerts/performance
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}
