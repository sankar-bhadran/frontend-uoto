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
        "background-color": "rgba(255, 255, 255, 0.5)",
        "footer-heading": "#1F2937",
        "footer-color": "#4B5563",
        "primarytext-color": "#111827",
        "secondarytext-color": "#374151",
        "Tertiarytext-color": "#6B7280",
      },
      boxShadow: {
        "custom-shadow": " 0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        "loginbox-shadow": "0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
        "loginbox1-shadow": "0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },

      fontFamily: {
        footerFont: "Inter",
      },

      screens: {
        mobileview: "300px",
      },
    },
  },
  plugins: [],
} satisfies Config;
