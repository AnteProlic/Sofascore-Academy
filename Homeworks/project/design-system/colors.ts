import { SemanticTokens } from "@pandacss/dev"

export const colors: SemanticTokens["colors"] = {
  background: {
    primary: { value: { base: "#222831", _dark: "#f95959" }},
    secondary: {value: { base: "#393e46", _dark: "#455d7a" }},
    tertiary: { value: { base: "#f96d00", _dark: "#233142" }},
    search: { value: { base: "#e3e3e3", _dark: "#e3e3e3" }},
    bg: { value: { base: "#f2f2f2", _dark: "#141010" }},
    img: { value: { base: "#FFFFFF", _dark: "#FFFFFF" }},
  },
  text: {
    default: { value: { base: "#FFFFFF", _dark: "#FFFFFF" }},
    title: { value: { base: "black", _dark: "#FFFFFF" }}
  }
}
