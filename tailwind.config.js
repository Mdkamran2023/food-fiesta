/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all of the template files in your project 
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    // Extend the default Tailwind CSS styles
    extend: {},
  },
  plugins: [
    // Use the tailwind-scrollbar-hide plugin
    require('tailwind-scrollbar-hide'),
  ]  
}
