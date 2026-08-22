/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B132B',
          primary: '#1C2541',
          blue: '#2563EB',
          accent: '#3A506B',
          gold: '#D97706',
          amber: '#F59E0B',
          lightGold: '#FEF3C7',
          kraft: '#C29B38',
          kraftDark: '#9C7A28',
          kraftLight: '#FBF7EE',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.3)',
        'glow-blue': '0 0 25px -5px rgba(37, 99, 235, 0.3)',
        'premium': '0 20px 40px -15px rgba(11, 19, 43, 0.12)',
      }
    },
  },
  plugins: [],
}
