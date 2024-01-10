/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        full: '100%',
      },
      width: {
        512: '512px',
        1024: '1024px',
        1366: '1366px',
        1536: '1526px',
      },
    },
  },
  plugins: [],
};
