/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary) / <alpha-value>)',
        background: {
          DEFAULT: 'hsl(var(--background) / <alpha-value>)',
          100: 'hsl(var(--background-100) / <alpha-value>)',
          200: 'hsl(var(--background-200) / <alpha-value>)',
          300: 'hsl(var(--background-300) / <alpha-value>)'
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground) / <alpha-value>)',
          100: 'hsl(var(--foreground-100) / <alpha-value>)',
          200: 'hsl(var(--foreground-200) / <alpha-value>)'
        }
      },
      screens: {
        mb: '375px',
        tb1: '520px',
        tb2: '730px',
        dm1: '1120px',
        dm2: '1440px',
        dl: '1530px'
      }
    }
  },
  plugins: []
};
