/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        destructive: {
          DEFAULT: "#dc2626",
        },
        accent: {
          DEFAULT: "#0284c7",
        },
        link: {
          DEFAULT: "#0284c7",
        },
      },
      spacing: {
        base: "2.25rem",
      },
    },
  },
  plugins: [],
};
