import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a16",
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(104, 255, 219, .2), 0 10px 48px rgba(65, 231, 205, .2)",
      },
    },
  },
  plugins: [],
};

export default config;
