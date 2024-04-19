/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
   "google": ["Montserrat", "sans-serif"]
      },
      screens:{
        xs:"350px"
      },
      width:{
        VH:"80%"
      },
      margin:{
        Modal:"15% auto"
      }
      
    },
  },
  plugins: [],
}

