import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["black", "wireframe", "light", "dark"],
    // themes: [
    //   "light",
    //   "dark",
    //   "cupcake",
    //   "pastel",
    //   "dracula",
    //   "forest",
    //   "night",
    //   "dim",
    //   "sunset",
    //   "lemonade",
    //   "nord",
    //   "wireframe",
    //   "black",
    // ],
  },
  plugins: [require("daisyui")],
};
export default config;
