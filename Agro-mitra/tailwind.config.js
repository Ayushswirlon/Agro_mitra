/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
    primary: 'var(--primary)',
    'primary-dark': 'var(--primary-dark)',
    'primary-light': 'var(--primary-light)',
    secondary: 'var(--secondary)',
    'secondary-dark':'var(--secondary-dark)',
    'secondary-light':'var(--secondary-light)',
    'text-primary': 'var(--text-primary)',
    'text-secondary': 'var(--text-secondary)',
    'text-tertiary':'var(--text-tertiary)',
    background: 'var(--background)',
    'background-light': 'var(--background-light)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

