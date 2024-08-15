/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: "Poppins",
      },
      minHeight: {
        128: "32rem",
        256: "64rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
