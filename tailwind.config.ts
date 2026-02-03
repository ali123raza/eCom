import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#22D3EE",
        accent: "#8B5CF6",
        surface: {
          light: "#FFFFFF",
          dark: "#111827",
        },
        background: {
          light: "#F8FAFC",
          dark: "#0B1120",
        },
        text: {
          primary: "#0F172A",
          muted: "#64748B",
        },
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(15, 23, 42, 0.25)",
        glass: "0 30px 60px -45px rgba(15, 23, 42, 0.45)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-700px 0" },
          "100%": { backgroundPosition: "700px 0" },
        },
      },
      animation: {
        shimmer: "shimmer 2.2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
