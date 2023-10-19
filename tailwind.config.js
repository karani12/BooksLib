/** @type {import('tailwindcss').Config} */
module.exports = {
  // set mode to class
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