/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'red':'#D30507',
        'golden':'#84754E',
        'white':'#FFFFFF',
        'gray':'#E6E7E8',
        'letters_color':'#333333',
        'input_color':'#EAEAEA'
        
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'extrabold': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

