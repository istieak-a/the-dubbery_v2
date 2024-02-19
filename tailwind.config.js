/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary100: "#3869E7",
        primary200: "#7896ff",
        primary300: "#e8f9ff",
        accent100: "#FF7F50",
        accent200: "#8f1e00",
        text100: "#333333",
        text200: "#5c5c5c",
        bg100: "#F7F7F7",
        bg200: "#ededed",
        bg300: "#c4c4c4",
        bgdark: "#1f2937",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3869e7",
          "secondary": "#0084ff",
          "accent": "#92b8ff",
          "neutral": "#dbeafe",
          "info": "#1e40af",
          "base-100": "#faf7f5",
          // "base": "#"
        },
      },
      "dark",
      "cupcake",
      "emerald"
    ],
  },
};
