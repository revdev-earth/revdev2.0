/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        'services': 'repeat(auto-fit, 200px)',
        'c2': 'repeat(auto-fit, 160px)',
        's2': 'repeat(3, 180px)',
        's3': 'repeat(3, 200px)',
        's4': 'repeat(4, 200px)'
      }
    },
  },
  plugins: [],
}
