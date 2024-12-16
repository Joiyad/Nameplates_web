/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        exo:"'Exo 2', sans-serif",
        k2d:"'K2D', sans-serif",
      },
      backgroundImage:{
        bgImage: "url('https://img.freepik.com/premium-vector/vector-circle-tech-with-light-blue-lamp-bulb-technology-background_43778-444.jpg?w=826')"
      },
      colors:{
        loaderbg: "#067eba",
      }
    },
  },
  plugins: [],
}
