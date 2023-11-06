/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem'
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        background: 'rgb(12, 12, 13)',
        'background-soft': 'rgb(37, 41, 47)'
      },
      boxShadow: {
        'skill-hover': '0px 0px 14px rgba(67, 67, 67, 0.37)'
      },
      gridTemplateColumns: {
        skills: 'repeat(auto-fill, minmax(300px, 1fr))',
        'skills-sm': 'repeat(auto-fill, minmax(250px, 1fr))',
        project: 'repeat(auto-fill, minmax(400px, 1fr))',
        'project-sm': 'repeat(auto-fill, minmax(300px, 1fr))'
      },
      keyframes: {
        wheel: {
          '100%': { opacity: 0, top: '24px' }
        }
      },
      animation: {
        wheel: 'wheel 1.3s infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
