import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        scaleup: {
          "0%": { transform: "scale-90" },
          "100%": { transform: "scale-110" },
        },
      },
      animation: {
        scaleup: "scaleup 1s ease-in-out infinite",
      },
      borderRadius: {
        large: "30%",
      },
    },
  },
  plugins: [],
};
export default config;
