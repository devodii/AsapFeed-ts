/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        "thick-blue": "#0051c3",
        "primary-orange": "#f63",
      },
      backgroundColor: {
        "primary-orange": "#f63",
        "primary-blue": "#2c51c3",
        "mid-gray": "#f9f8f9",
      },
    },
  },
  plugins: [],
};
