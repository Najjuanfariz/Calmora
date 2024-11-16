import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan : "#FEF0F7",
        aliPink : "#FEE8F3",
        lightPink : "#D05D97",
        darkPink : "#B0548A",
      },
    },
  },
  plugins: [],
};
export default config;
