/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ── Brand Red ─────────────────────────────────────────────
        // Primary accent. Buttons, links, icons, active nav states and
        // key highlights only — never large fields of colour.
        brand: {
          DEFAULT: "#C62828", // Brand Red · primary
          dark: "#A31F1F", // hover / pressed
          deep: "#8A1C1C",
          deeper: "#6E1616",
          light: "#EF6A5A", // accents on charcoal surfaces
          soft: "#FBEDEC", // tinted panels on white
        },

        // ── Charcoal ──────────────────────────────────────────────
        // Typography and structure: headings, body copy, footer and
        // the dark sections that give the site its weight.
        charcoal: {
          DEFAULT: "#252525",
          dark: "#1A1A1A",
          light: "#3D3D3D",
          soft: "#F3F4F6",
        },

        // ── Light Grey ────────────────────────────────────────────
        // Supporting surface: alternating sections, subtle card
        // backgrounds, input fields and dividers.
        sand: {
          DEFAULT: "#F3F4F6",
          dark: "#E5E7EB",
          light: "#FAFAFB",
        },

        ink: "#6B6B6B",

        // ── Legacy aliases ────────────────────────────────────────
        // Older token names kept so existing utilities still resolve
        // against the new palette.
        navy: {
          DEFAULT: "#C62828",
          dark: "#A31F1F",
          deep: "#8A1C1C",
          deeper: "#6E1616",
          light: "#EF6A5A",
          soft: "#FBEDEC",
        },
        forest: {
          DEFAULT: "#252525",
          light: "#3D3D3D",
          dark: "#1A1A1A",
          soft: "#F3F4F6",
        },
        steel: {
          DEFAULT: "#C62828",
          dark: "#A31F1F",
          light: "#EF6A5A",
          soft: "#FBEDEC",
        },
        gold: {
          DEFAULT: "#C62828",
          light: "#EF6A5A",
          dark: "#A31F1F",
          soft: "#FBEDEC",
        },
        green: {
          DEFAULT: "#C62828",
          dark: "#A31F1F",
          light: "#EF6A5A",
        },
        brass: {
          DEFAULT: "#C62828",
          light: "#EF6A5A",
          dark: "#A31F1F",
        },
        cream: {
          DEFAULT: "#F3F4F6",
          dark: "#E5E7EB",
        },
        mist: {
          DEFAULT: "#F3F4F6",
          dark: "#E5E7EB",
        },
        parchment: {
          DEFAULT: "#F3F4F6",
          dark: "#E5E7EB",
        },
      },
      fontFamily: {
        display: ['"Noto Serif"', "serif"],
        hero: ['"Noto Serif"', "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(37,37,37,0.06), 0 12px 32px -12px rgba(37,37,37,0.18)",
        lift: "0 2px 4px rgba(37,37,37,0.08), 0 24px 48px -16px rgba(37,37,37,0.28)",
        gold: "0 0 0 1px rgba(198,40,40,0.35), 0 16px 40px -12px rgba(198,40,40,0.4)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        kenburns: "kenburns 14s ease-out forwards",
        fadeup: "fadeup 0.9s cubic-bezier(0.16,1,0.3,1) both",
        fadein: "fadein 1.1s ease both",
        float: "float 7s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        kenburns: {
          "0%": { transform: "scale(1.12)" },
          "100%": { transform: "scale(1)" },
        },
        fadeup: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
