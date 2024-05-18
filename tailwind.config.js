const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    fontFamily: {
      inter: ['"Inter", sans-serif'],
    },
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
