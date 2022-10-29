/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: " url('/src/assets/login.jpg')",
        "hero-pattern":
          "linear-gradient(rgba(126, 34, 206, 0.6),rgba(126, 34, 206, 0.6)), url('/src/assets/login.jpg')",
      },
    },
  },
  plugins: [],
};
