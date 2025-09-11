export const API_HOSTNAME = "https://academy-backend.sofascore.dev"

export const getAllSports = () =>
  `${API_HOSTNAME}/sports`

export const getTeamImage = (id: number) =>
  `${API_HOSTNAME}/team/${id}/image`

export const getPlayerImage = (id: number) =>
  `${API_HOSTNAME}/player/${id}/image`

export const getTournamentImage = (id: number) =>
  `${API_HOSTNAME}/tournament/${id}/image`