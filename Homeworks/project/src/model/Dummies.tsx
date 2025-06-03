import { Tournament, Event, Team, Country, Score, EventStatus } from "./interface";

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
    id: NaN,
    slug: "...",
    tournament: dummyTournament,
    homeTeam: dummyTeam,
    awayTeam: dummyTeam,
    status: EventStatus.notstarted,
    homeScore: dummyScore,
    awayScore: dummyScore,
    round: 0
}