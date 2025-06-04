"use client"

import useSWR from "swr"
import { Player, Team } from "./interface"
import { dummyTeam } from "./Dummies"

interface TeamProviderProps {
    id: number
    children: (
        team: Team,
        isLoading: boolean,
        error: Error | null
    ) => React.ReactNode
}

interface TeamPlayersProviderProps {
    id: number
    children: (
        players: Player[],
        isLoading: boolean,
        error: Error | null
    ) => React.ReactNode
}

export const TeamProvider = ({ id, children }: TeamProviderProps) => {
    const { data, isLoading, error } = useSWR<Team>(`/api/team/${id}`)

    return children(data || dummyTeam, isLoading, error)
}

export const TeamPlayersProvider = ({ id, children }: TeamPlayersProviderProps) => {
    const { data, isLoading, error } = useSWR<Player[]>(`/api/team/${id}/players`)

    return children(data || [], isLoading, error)
}
