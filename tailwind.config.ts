import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'pink': '#fabcf0',
      'pinkLight': '#fef8fd',
      'green': '#628850',
      'greenDark': '#384233',
      'orange': '#ffa649',
      'yellow': '#f8e10e'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
