import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#F97316",
        dark: "#0F172A",
        background: "#F8FAFC",
        card: "#FFFFFF",
        muted: "#94A3B8",
        glass: "rgba(255,255,255,0.65)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
        display: ["Space Grotesk", "var(--font-geist-sans)"],
      },
      boxShadow: {
        card: "0 20px 45px rgba(15, 23, 42, 0.12)",
        glow: "0 0 35px rgba(37, 99, 235, 0.35)",
      },
      borderRadius: {
        xl: "24px",
        "2xl": "32px",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
