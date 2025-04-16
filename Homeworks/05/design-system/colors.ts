import { SemanticTokens } from "@pandacss/dev"

export const colors: SemanticTokens["colors"] = {
  background: {
    header: { value: { base: "#E3350D", _dark: "#4D638C" } },
    image: { value: { base: "#EEEEEE", _dark: "#354159" } },
    details: { value: { base: "#FFFFFF", _dark: "#1F2735" } },
  },
  text: {
    default: { value: { base: "#262626", _dark: "#ACACAC" } },
    header: { value: { base: "#FFFFFF", _dark: "#FFFFFF" } }
  }
}
