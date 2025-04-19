import { defineConfig } from "@pandacss/dev"

import { colors } from "./design-system/colors"
import { breakpoints } from "./design-system/breakpoints"
import { tokens } from "./design-system/tokens"
import { textStyles } from "./design-system/typography"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          type: {
            electric: { value: "#F8D030" },
            fairy: { value: "#F0B6BC" },
            fighting: { value: "#C03028" },
            fire: { value: "#F08030" },
            flying: { value: "#A890F0" },
            ghost: { value: "#705898" },
            grass: { value: "#78C850" },
            ground: { value: "#E0C068" },
            ice: { value: "#98D8D8" },
            normal: { value: "#A8A878" },
            poison: { value: "#A040A0" },
            psychic: { value: "#F85888" },
            steel: { value: "#B8B8D0" },
            water: { value: "#6890F0" },
            bug: { value: "#A8B820" },
            dragon: { value: "#7038F8" },
            rock: { value: "#B8A038" }
          },
        },
      },
    },
    breakpoints,
    tokens,
    textStyles,
    semanticTokens: {
      colors,
    },
  },

  conditions: {
    dark: "[data-theme=dark] &",
  },

  // The output directory for your css system
  outdir: "styled-system",

  // This allows us to generate JSX patterns
  jsxFramework: "react",
})
