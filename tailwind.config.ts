import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "border-color ": "#656565",
        "red-fontcolor": "#E71C3A",
        "background-color": "#ffffff",
        "footer-heading": "#1F2937",
        "footer-color": "#4B5563",
      },
      boxShadow: {
        "custom-shadow": " 0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
      },

      fontFamily: {
        footerFont: "Inter",
      },
    },
  },
  plugins: [],
} satisfies Config;
