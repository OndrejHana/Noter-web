const { readBuilderProgram } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-light": "#D4D4D4",
        "gray-mid": "#414141",
        "gray-dark": "#2C2C2C",
        "gray-darker": "#1D1D1D",
        "blue-light": "#A0EBF5",
        "blue-mid": "#0590F5",
        "blue-dark": "#0369A1",
        "yellow-light": "#FFF07F",
        "yellow-mid": "#FFD60A",
        "yellow-dark": "#E5AC19",
        "red-light": "#FDA4AF",
        "red-mid": "#E1453A",
        "red-dark": "#B91C1C",
      },
    },
  },
  plugins: [],
}
