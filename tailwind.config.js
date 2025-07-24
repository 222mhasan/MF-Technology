// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "DancingScript": ["Dancing Script", "cursive"], // You can name it anything
      },
    },
  },
  plugins: [],
};
