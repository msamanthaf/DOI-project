import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screen: {
      mid: "1123px",
      // => @media (min-width: 640px) { ... }
    },
    extend: {
      backgroundColor: {
        navbar: "#EBE9F7",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
