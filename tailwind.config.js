/** @type {import('tailwindcss').Config} */
module.exports = {
  // set mode to class
  daisyui: {
    themes: ["light"]
  },
  darkMode:"class",
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      // 
    },
  },
  plugins: [require('daisyui')],
}