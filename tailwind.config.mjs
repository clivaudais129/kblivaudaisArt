/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAFAFA',
        warm: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#90999f',
          500: '#6B7280',
          600: '#4B5563',
          700: '#314043',
          800: '#484848',
          900: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#974331',
          light: '#b05540',
          dark: '#7a3628',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        nav: ['Raleway', 'system-ui', 'sans-serif'],
        heading: ['Lato', 'system-ui', 'sans-serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wide-3': '3px',
        'wide-1': '1px',
      },
    },
  },
  plugins: [],
};
