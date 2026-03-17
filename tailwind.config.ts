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
        surface: {
          DEFAULT: "var(--bg-primary)",
          card: "var(--bg-surface)",
          active: "var(--bg-active)",
        },
        border: "var(--border)",
        foreground: {
          DEFAULT: "var(--text-primary)",
          emphasis: "var(--text-emphasis)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
        },
        accent: {
          green: "var(--accent-green)",
          cyan: "var(--accent-cyan)",
          amber: "var(--accent-amber)",
          purple: "var(--accent-purple)",
        },
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "monospace"],
        body: ["var(--font-ibm-plex)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
