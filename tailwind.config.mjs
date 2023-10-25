/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        background: 'rgb(12, 12, 13)',
        'background-soft': 'rgb(37, 41, 47)'
      },
      keyframes: {
        wheel: {
          '100%': { opacity: 0, top: '24px' },
        }
      },
      animation: {
        wheel: 'wheel 1.3s infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
