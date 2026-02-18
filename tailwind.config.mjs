/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#FDF8F0',
        warm: {
          50: '#FDF8F0',
          100: '#F9EFDF',
          200: '#F0DFC3',
          300: '#E5C9A0',
          400: '#D4A87A',
          500: '#C08B5C',
          600: '#A06E42',
          700: '#7D5433',
          800: '#5C3D26',
          900: '#3D2819',
        },
        terracotta: {
          DEFAULT: '#C67B5C',
          light: '#D4956E',
          dark: '#A85F42',
        },
        gold: {
          DEFAULT: '#C4A265',
          light: '#D4B87A',
          dark: '#A88545',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
