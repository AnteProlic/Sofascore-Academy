import { SemanticTokens } from "@pandacss/dev"

export const colors: SemanticTokens["colors"] = {
  background: {
    primary: { value: { base: "#E3350D", _dark: "#4D638C" } },
    secondary: {value: {base: "#3B4CCA"}},
    image: { value: { base: "#EEEEEE", _dark: "#354159" } },
    details: { value: { base: "#FFFFFF", _dark: "#1F2735" } },
  },
  text: {
    default: { value: { base: "#262626", _dark: "#FFFFFF" } },
    primary: { value: { base: "#FFFFFF", _dark: "#FFFFFF" } },
    type: {value: {base: "#000000", _dark: "#000000"}}
  },
/*   type: {
    electric: { value: {base: "#F8D030"} },
    fairy: { value: {base: "#F0B6BC"} },
    fighting: { value: {base: "#C03028"} },
    fire: { value: {base: "#F08030"} },
    flying: { value: {base: "#A890F0"} },
    ghost: { value: {base: "#705898"} },
    grass: { value: {base: "#78C850"} },
    ground: { value: {base: "#E0C068"} },
    ice: { value: {base: "#98D8D8"} },
    normal: { value: {base: "#A8A878"} },
    poison: { value: {base: "#A040A0"} },
    psychic: { value: {base: "#F85888"} },
    steel: { value: {base: "#B8B8D0"} },
    water: { value: {base: "#6890F0"} },
    bug: { value: {base: "#A8B820"} },
    dragon: { value: {base: "#7038F8"} },
    rock: { value: {base: "#B8A038"} },
  } */
}
