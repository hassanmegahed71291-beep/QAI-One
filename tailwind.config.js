/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        success: "#10B981",
        ai: "#7C3AED",
        dark: "#0F172A",
        light: "#F8FAFC",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      borderRadius: {
        xl: "16px",
        "2xl": "20px",
      },

      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,0.08)",
      },
    },
  },

  plugins: [],
}
