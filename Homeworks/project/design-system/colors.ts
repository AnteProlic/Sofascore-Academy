import { SemanticTokens } from "@pandacss/dev"

export const colors: SemanticTokens["colors"] = {
  background: {
    primary: { value: { base: "#06D001" }},
    secondary: {value: { base: "#FFFFFF" }},
    tertiary: { value: { base: "#522546" }},
    bg: { value: { base: "#FFFFFF" }},
  },
  text: {
    default: { value: { base: "#424242" }},
    title: { value: { base: "#F5F5F5" }}
  }
}
