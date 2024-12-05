/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['var(--roboto)', 'sans-serif'],
        'open-sans': ['var(--Open-Sans)', 'sans-serif'],
        'sign': ['var(--sign)', 'sans-serif'],
        'transforma': ['var(--transforma)', 'sans-serif'],
      },
      colors: {
        'orangee': 'var(--main-color)',
      },
      
    },
  },
  screens:{
    'lg': '954px',
    'lgg': '850px',
    'md': '768px',
    'sm': '568px',
    
  },
  plugins: [],
}