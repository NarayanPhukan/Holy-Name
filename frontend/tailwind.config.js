/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2563EB", // Blue 600
        "on-primary": "#FFFFFF",
        "primary-container": "#DBEAFE", // Blue 100
        "on-primary-container": "#1E40AF", // Blue 800
        "primary-fixed": "#DBEAFE",
        "on-primary-fixed": "#2563EB",
        "primary-fixed-dim": "#BFDBFE",
        "on-primary-fixed-variant": "#1D4ED8",
        
        "secondary": "#0F172A", // Slate 900
        "on-secondary": "#FFFFFF",
        "secondary-container": "#F1F5F9", 
        "on-secondary-container": "#0F172A",
        "secondary-fixed": "#F1F5F9",
        "on-secondary-fixed": "#0F172A",
        "secondary-fixed-dim": "#E2E8F0",
        "on-secondary-fixed-variant": "#334155",

        "tertiary": "#F59E0B", // Amber 500
        "on-tertiary": "#000000",
        "tertiary-container": "#FEF3C7",
        "on-tertiary-container": "#92400E",
        "tertiary-fixed": "#FEF3C7",
        "on-tertiary-fixed": "#92400E",
        "tertiary-fixed-dim": "#FDE68A",
        "on-tertiary-fixed-variant": "#D97706",

        "error": "#BA1A1A",
        "on-error": "#FFFFFF",
        "error-container": "#FFDAD6",
        "on-error-container": "#93000A",

        "background": "#FAFAFA", // Neutral 50
        "on-background": "#18181B", // Zinc 900
        "surface": "#FFFFFF",
        "on-surface": "#18181B",
        "surface-variant": "#F4F4F5", // Neutral 100
        "on-surface-variant": "#52525B", // Zinc 600
        "outline": "#D4D4D8", // Zinc 300
        "outline-variant": "#E4E4E7", // Zinc 200
        
        "inverse-on-surface": "#F8FAFC",
        "inverse-surface": "#0F172A",
        "inverse-primary": "#93C5FD",
        
        "canva-cyan": "#00c4cc",
        "canva-purple": "#7d2ae8",
        "canva-bg-start": "#eff6ff", // Tinted blue background
        "canva-bg-mid": "#f1f5f9",
        "canva-bg-end": "#fafafa",
        
        "surface-dim": "#D4D4D8",
        "surface-bright": "#FAFAFA",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#F4F4F5",
        "surface-container": "#E4E4E7",
        "surface-container-high": "#D4D4D8",
        "surface-container-highest": "#A1A1AA"
      },
      fontFamily: {
        "sans": ["Outfit", "sans-serif"],
        "headline": ["Prata", "serif"],
        "body": ["Outfit", "sans-serif"],
        "label": ["Outfit", "sans-serif"]
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // Assuming content is duped to 200% width
        }
      },
      animation: {
        marquee: 'marquee 80s linear infinite',
      },
      borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
    },
  },
  plugins: [],
}
