export enum EventStatus {
  notStarted="notstarted",
  inProgress="inprogress",
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

export enum CardTeamSide {
  home="home",
  away="away"
}

export enum GoalScoringTeam {
  home="home",
  away="away"
}

export enum CardColor {
  yellow="yellow",
  yellowRed="yellowred",
  red="red"
}

export enum IncidentType {
  card="card",
  goal="goal",
  period="period"
}

export enum GoalType {
  regular="regular",
  ownGoal="owngoal",
  penalty="penalty",
  onePoint="onepoint",
  twoPoint="twopoint",
  threePoint="threepoint",
  touchdown="touchdown",
  safety="safety",
  fieldGoal="fieldgoal",
  extraPoint="extrapoint"
}

export enum StandingsType {
  total="total",
  home="home",
  away="away"
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

export interface Player {
  id: number,
  name: string,
  slug: string,
  country: Country,
  position: string
}

export interface Incident {
  id: number,
  time: number,
  type: IncidentType
}

export interface Card extends Incident{
  player: Player,
  teamSide: CardTeamSide,
  color: CardColor,
}

export interface Goal extends Incident {
  player: Player,
  scoringTeam: GoalScoringTeam,
  homeScore: number,
  awayScore: number
  goalType: GoalType,
}

export interface Period extends Incident {
  text: string
}

export interface StandingRow {
  id: number,
  team: Team,
  points?: number,
  scoresFor: number,
  scoresAgainst: number,
  played: number,
  wins: number,
  draws: number,
  losses: number,
  percentage?: number
}

export interface Standing {
  id: number,
  tournament: Tournament,
  type: StandingsType,
  sortedStandingsRows: StandingRow[]
}