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
        // Obsidian Lumina — public site
        lum: {
          deep: "#0A0A0C",
          base: "#121216",
          elev: "#18181E",
          high: "#1F1F23",
          line: "#26262E",
          focus: "#3A3A47",
          ink: "#F4F4F6",
          dim: "#9E9EB0",
          mute: "#7C7C8C",
          lime: "#CCFF00",
          cyan: "#00F0FF",
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
