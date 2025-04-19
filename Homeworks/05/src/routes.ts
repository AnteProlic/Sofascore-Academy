export const API_HOSTNAME = "https://pokeapi.co/api/v2"

export const getPokemon = (pokemon: number|string) =>
  `${API_HOSTNAME}/pokemon/${pokemon}/`

export const getStats = (pokemon: number|string) =>
  `${API_HOSTNAME}/stat/${pokemon}/`

export const getSpecies = (pokemon: number|string) =>
  `${API_HOSTNAME}/pokemon-species/${pokemon}`

export const getMultiple = (n: number) =>
  `${API_HOSTNAME}/pokemon/?limit=${n}`
