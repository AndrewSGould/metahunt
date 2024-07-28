/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        'content-height': 'calc(100vh - 64px)',
      },
      colors: {
        primary: '#0c5440',
        secondary: '#1f2937',
        tertiary: '#1e293b',
      },
    },
  },
  plugins: [require('daisyui')],
};
