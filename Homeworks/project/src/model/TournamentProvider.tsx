"use client"

import useSWR from "swr"
import { Tournament, Event, Standing } from "./interface"
import { dummyStanding, dummyTournament } from "./Dummies"

interface TournamentProviderProps {
  id: number
  children: (
    tournament: Tournament,
    isLoading: boolean,
    error: Error | null
  ) => React.ReactNode
}

interface AllTournamentsProviderProps {
  slug: string
  children: (
    tournamentsList: Tournament[],
    isLoading: boolean,
    error: Error | null
  ) => React.ReactNode
}

interface TournamentEventProviderProps {
  id: number
  span: "last"|"next"
  page: number
  children: (
    eventList: Event[],
    isLoading: boolean,
    error: Error | null
  ) => React.ReactNode
}

interface TournamentStandingsProviderProps {
  id: number
  children: (
    standings: Standing[],
    isLoading: boolean,
    error: Error | null
  ) => React.ReactNode
}

export const TournamentProvider = ({ id, children }: TournamentProviderProps) => {
  const { data, isLoading, error } = useSWR<Tournament>(`/api/tournament/${id}`)

  return children(data || dummyTournament, isLoading, error)
}

export const AllTournamentsProvider = ({ slug, children }: AllTournamentsProviderProps) => {
  const { data, isLoading, error } = useSWR<Tournament[]>(`/api/sport/${slug}/tournaments`)

  return children(data || [], isLoading, error)
}

export const TournamentEventProvider = ({ id, span, page, children}: TournamentEventProviderProps) => {
  const { data, isLoading, error } = useSWR<Event[]>(`/api/tournament/${id}/events/${span}/${page}`)
  
  return children(data || [], isLoading, error)
}

export const TournamentStandingsProvider = ({ id, children }: TournamentStandingsProviderProps) => {
  const { data, isLoading, error } = useSWR<Standing[]>(`/api/tournament/${id}/standings`)

  return children(data || [], isLoading, error)
}