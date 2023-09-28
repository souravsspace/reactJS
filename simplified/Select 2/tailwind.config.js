/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          900: "hsl(190, 10%, 10%)",
          800: "hsl(190, 10%, 14%)",
        },
        white: "hsl(228, 22%, 95%)",
      },
    },
  },
  plugins: [],
}
