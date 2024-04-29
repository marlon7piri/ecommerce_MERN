/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "460px",
        md: "750px",
        lg: "1024px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
