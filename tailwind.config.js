/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skycream: {
          50: '#F5F9FD',
          100: '#EBF3FA',
          200: '#DFEDF8',
          300: '#D0E3F3',
          400: '#B9D5ED',
        },
        electric: {
          500: '#1D77FF',
          600: '#0066FF',
          700: '#0052CC',
        },
        obsidian: {
          950: '#090D14',
          900: '#0D1520',
          800: '#15202E',
          700: '#213042',
          600: '#32465C',
        },
        accent: {
          gold: '#C59A6F',
          amber: '#E09F3E',
          teal: '#2A9D8F',
          blue: '#1A73E8',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 20px 45px -12px rgba(14, 55, 105, 0.07)',
        'card': '0 12px 35px -8px rgba(14, 55, 105, 0.06)',
        'elevated': '0 25px 65px -15px rgba(14, 55, 105, 0.12)',
        'glow-blue': '0 0 35px -5px rgba(29, 119, 255, 0.25)',
      },
    },
  },
  plugins: [],
}
