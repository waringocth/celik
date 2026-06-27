import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        primary: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
          glow: "var(--primary-glow)",
        },
        text: {
          DEFAULT: "var(--text)",
          muted: "var(--text-muted)",
        },
        border: "var(--border)",
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-primary": "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
        "gradient-card": "linear-gradient(135deg, #111318 0%, #1a1d24 100%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 2s infinite",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(245,158,11,0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(245,158,11,0.6)" },
        },
      },
      boxShadow: {
        "primary": "0 0 20px rgba(245,158,11,0.3)",
        "primary-lg": "0 0 40px rgba(245,158,11,0.4)",
        "card": "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
