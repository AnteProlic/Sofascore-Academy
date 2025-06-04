import { Tournament, Event, Team, Country, Score, EventStatus, Player } from "./interface";

export const dummyTournament: Tournament = {
  id: 0,
  name: "...",
  slug: "...",
  sport: {
    id: 0,
    name: "...",
    slug: "..."
  },
  country: {
    id: 0,
    name: "..."
  }
}

export const dummyCountry: Country = {
  id: 0,
  name: "..."
}

export const dummyTeam: Team = {
  id: 0,
  name: "...",
  country: dummyCountry,
  managerName: "...",
  venue: "..."
}

export const dummyScore: Score = {
  total: 0
}

export const dummyEvent: Event = {
    id: 0,
  slug: "...",
  tournament: dummyTournament,
  homeTeam: dummyTeam,
  awayTeam: dummyTeam,
  status: EventStatus.notStarted,
  homeScore: dummyScore,
  awayScore: dummyScore,
  round: 0
}

export const dummyPlayer: Player = {
  id: 0,
  name: "...",
  slug: "...",
  country: dummyCountry,
  position: "..."
}