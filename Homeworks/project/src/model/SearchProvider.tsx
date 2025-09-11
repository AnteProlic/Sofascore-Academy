"use client"

import useSWR from "swr"
import { Player, Team } from "./interface"

interface SearchPlayerProviderProps {
  query: string
  children: (
    players: Player[]
  ) => React.ReactNode
}

interface SearchTeamProviderProps {
  query: string
  children: (
    teams: Team[]
  ) => React.ReactNode
}

export const SearchPlayerProvider = ({ query, children }: SearchPlayerProviderProps) => {
    const { data, isLoading, error } = useSWR<Player[]>(`/api/search/player/${query}`)

    return children(data || [])
}

export const SearchTeamProvider = ({ query, children }: SearchTeamProviderProps) => {
    const { data, isLoading, error } = useSWR<Team[]>(`/api/search/team/${query}`)


    return children(data || [])
}