import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   theme: {
    extend: {
      colors: {
        creme: {
          50: "#fdfaf5",
          100: "#f8f0e2",
          200: "#f0e0c4",
        },
        rosebrand: {
          500: "#f06292",
          600: "#e24a7f",
        },
        militar: {
          500: "#4b5a41",
          600: "#3b4634",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
