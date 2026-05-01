import type { Config } from "tailwindcss";

const config: Config = {
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
        cream: "#F0E9D6",
        surface: "#E8DFC7",
        ink: "#2A2419",
        muted: "#6E6650",
        warm: "#D8CFB6",
        olive: "#5A6B3A",
        terracotta: "#B05530",
      },
    },
  },
  plugins: [],
};
export default config;
