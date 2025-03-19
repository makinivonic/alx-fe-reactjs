/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Equivalent to 'purge' in Tailwind v2
    darkMode: 'class', // Enables dark mode (use 'media' for system-based dark mode)
    theme: {
      extend: {},
    },
    variants: {
      extend: {}, // Extend variants if needed
    },
    plugins: [],
  };
  