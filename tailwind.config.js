/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0c5440',
        secondary: '#1f2937',
        tertiary: '#1e293b',
      },
    },
  },
  plugins: [require('daisyui')],
};
