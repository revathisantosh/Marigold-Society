import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#6B2426",
        "maroon-deep": "#4f2124",
        marigold: "#D4A017",
        "hero-yellow": "#EEC852",
        parchment: "#FAF8F4",
        ink: "#2B1810",
        vine: "#4A5230",
        royal: "#1E3A5F",
        "parchment-dark": "#F2EDE4",
        "parchment-light": "#FDFCFA",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-garamond)", "Georgia", "serif"],
        label: ["var(--font-inter)", "system-ui", "sans-serif"],
        great: ["var(--font-luxurious-script)", "cursive"],
        wordmark: ["var(--font-cormorant-garamond)", "Georgia", "serif"],
        times: ["Times New Roman", "Times", "serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        "display-sm": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1" }],
        "display-md": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.05" }],
        "display-lg": ["clamp(3rem, 7vw, 6rem)", { lineHeight: "1.0" }],
        "display-xl": ["clamp(4rem, 10vw, 9rem)", { lineHeight: "0.95" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
      },
      letterSpacing: {
        "wider-label": "0.2em",
        "widest-label": "0.3em",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transitionTimingFunction: {
        "bloom": "cubic-bezier(0.16, 1, 0.3, 1)",
        "elegant": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "bloom-in": "bloomIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "draw": "draw 2s ease-in-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        bloomIn: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        draw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
