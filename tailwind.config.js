/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          800: '#1E293B',
          900: '#0F172A',
          950: '#0A0F1D',
        },
        ivory: {
          50: '#FAFAFA',
          100: '#F8FAFC',
          200: '#F1F5F9',
        },
        amber: {
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        accent: {
          DEFAULT: '#D97706',
          hover: '#B45309',
          light: '#FFFBEB',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -10px rgba(15, 23, 42, 0.05)',
        'card-hover': '0 20px 40px -15px rgba(15, 23, 42, 0.12)',
        nav: '0 4px 20px -2px rgba(15, 23, 42, 0.04)',
      }
    },
  },
  plugins: [],
}
