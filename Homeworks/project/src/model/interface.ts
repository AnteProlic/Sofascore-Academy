export enum EventStatus {
  notstarted="notstarted",
  inprogress="inprogress",
  finished="finished"
}

export enum EventWinnerCode {
  home="home",
  away="away",
  draw="draw"
}

export enum Span {
  last="last",
  next="next"
}

export interface Score {
  total: number
  period1?: number
  period2?: number
  period3?: number
  period4?: number
  overtime?: number
}

export interface Sport {
  id: number
  name: string
  slug: string
}

export interface Tournament {
  id: number,
  name: string,
  slug: string,
  sport: {
    id: number,
    name: string,
    slug: string
  },
  country: {
    id: number,
    name: string
  }
}

export interface Country {
  id: number,
  name: string
}

export interface Team {
  id: number,
  name: string,
  country: Country,
  managerName?: string,
  venue?: string
}

export interface Event {
  id: number,
  slug: string,
  tournament: Tournament,
  homeTeam: Team,
  awayTeam: Team,
  status: EventStatus,
  startDate?: string | null
  homeScore: Score,
  awayScore: Score,
  winnerCode?: EventWinnerCode | null,
  round: number
}
