"use client"

import useSWR from "swr"
import { Tournament, Event } from "./interface"
import { dummyTournament } from "./Dummies"

interface TournamentProvider {
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

export const TournamentProvider = ({ id, children }: TournamentProvider) => {
  const { data, isLoading, error } = useSWR<Tournament>(`/api/tournament/${id}`)

  return children(data || dummyTournament, isLoading, error)
}

export const AllTournamentsProvider = ({ slug, children }: AllTournamentsProviderProps) => {
  const { data, isLoading, error } = useSWR<Tournament[]>(`/api/sport/${slug}/tournaments`)

  return children(data || [], isLoading, error)
}

export const TournamentEventProvider = ({ id, span, page, children}: TournamentEventProviderProps) => {
  const { data, isLoading, error } = useSWR<Event[]>(`/api/tournament/${id}/events/${span}/${page}`)
  console.log(data)
  return children(data || [], isLoading, error)
}