import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 60px rgba(255,255, 255, 0.75)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
        cyanGlow: [
          "0 0px 60px rgba(0,255, 255, 0.75)",
          "0 0px 65px rgba(0, 255,255, 0.60)",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
