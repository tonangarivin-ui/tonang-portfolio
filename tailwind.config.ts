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
        // public site palette (herewallet.app)
        here: {
          bg: "#2c3034",
          deep: "#232629",
          card: "#35393b",
          line: "#3d4247",
          cream: "#f3ebea",
          blush: "#ebdedc",
          muted: "#a9a3a0",
          dim: "#6b6661",
          yellow: "#f7b302",
          bright: "#fce823",
          orange: "#fca857",
          pink: "#fc668b",
          violet: "#c74ad5",
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
        sans: ["Cabinet Grotesk", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "1140px",
      },
    },
  },
  plugins: [],
};
export default config;
