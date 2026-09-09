/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFDFB',
          100: '#F7F6F2',
          200: '#EFECE6',
          300: '#E5E1D8',
          400: '#D5CFC3',
        },
        obsidian: {
          900: '#0F1012',
          800: '#181A1D',
          700: '#23262A',
          600: '#34383E',
        },
        accent: {
          gold: '#C59A6F',
          amber: '#E09F3E',
          teal: '#2A9D8F',
          terracotta: '#E76F51',
          sky: '#3B82F6',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.04)',
        'elevated': '0 25px 60px -15px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 30px -5px rgba(197, 154, 111, 0.3)',
      },
      borderRadius: {
        'cut': '20px',
      }
    },
  },
  plugins: [],
}
