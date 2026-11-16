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
        // Editorial Light & Crimson (public site)
        lum: {
          deep: "#FAF8F4",
          base: "#FFFDFA",
          elev: "#F1ECE4",
          high: "#E0DACF",
          line: "#E0DACF",
          focus: "#C9C2B5",
          ink: "#16130F",
          dim: "#4A4640",
          mute: "#6E6961",
          lime: "#B13124",
          cyan: "#8C2317",
          violet: "#8B5CF6",
        },
        // retained for the admin surface
        canvas: "#08090B",
        surface: {
          DEFAULT: "#121315",
          card: "#181920",
          elevated: "#22232D",
          border: "#2D2F3D",
        },
        amber: {
          glow: "#F59E0B",
          gold: "#E5A93C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "Space Grotesk", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "1440px",
      },
      borderRadius: {
        sharp: "4px",
        card: "8px",
      },
    },
  },
  plugins: [],
};
export default config;
