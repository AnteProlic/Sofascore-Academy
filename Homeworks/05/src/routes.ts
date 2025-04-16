export const API_HOSTNAME = "https://pokeapi.co/api/v2"

export const getPokemon = (pokemonId: number) =>
  `${API_HOSTNAME}/pokemon/${pokemonId}/`

export const getStats = (pokemonId: number) =>
  `${API_HOSTNAME}/stat/${pokemonId}/`