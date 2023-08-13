/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'gris': '#E4E3E3',
      'grisOscuro': '#979696'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        'services': 'repeat(auto-fit, 200px)',
        's2': 'repeat(2, 200px)',
        's3': 'repeat(3, 200px)',
        's4': 'repeat(4, 200px)'
      }
    },
  },
  plugins: [],
}
