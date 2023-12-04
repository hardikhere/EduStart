import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        skewup: {
          "0%": { transform: "skewY(-12deg) rotate3d(360,1 , 0 , 45deg)" },
          "100%": { transform: "skewY(0deg) rotate3d(0 ,0 , 0 , 0deg)" },
        },
      },
      animation: {
        skewup: "skewup 1s ease-in-out 1",
      },
      borderRadius: {
        large: "30%",
      },
    },
  },
  plugins: [],
};
export default config;
