import type { Config } from "tailwindcss";

import { addIconSelectors } from "@iconify/tailwind";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "header-left": "url('/header-top-left.svg')",
        "header-right": "url('/header-top-right.svg')",
      },
    },
  },
  plugins: [addIconSelectors(["uil"])],
} satisfies Config;
