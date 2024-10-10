import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#00C06F",
        yellow: "#CFFF69",
      },
      fontSizes: {
        xl: "2.986rem",
        md: "2.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
