/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        login:
          "linear-gradient(rgba(126, 34, 206, 0.6),rgba(126, 34, 206, 0.6)), url('/src/assets/login.jpg')",
        register:
          "linear-gradient(rgba(126, 34, 206, 0.6),rgba(126, 34, 206, 0.6)), url('/src/assets/register.png')",
      },
    },
  },
  plugins: [],
};
