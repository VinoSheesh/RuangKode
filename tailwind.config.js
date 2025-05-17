 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
     extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors:{
        ungu: "#8F00FF",
        bgweb:"#0E0B16",
        abu:"#1A1625"
      },
     },
   },
   plugins: [
   ],
 }