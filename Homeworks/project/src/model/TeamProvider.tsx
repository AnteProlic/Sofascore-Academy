"use client"

import useSWR from "swr"
import { Player, Team, Span, Tournament } from "./interface"
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

interface TeamEventsProviderProps {
    id: number
    span: Span
    page: number
    children: (
        events: Event[],
        isLoading: boolean,
        error: Error | null
    ) => React.ReactNode
}

interface TeamTournamentsProviderProps {
    id: number
    children: (
        tournaments: Tournament[],
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

export const TeamEventsProvider = ({ id, span, page, children }: TeamEventsProviderProps) => {
    const { data, isLoading, error } = useSWR<Event[]>(`/api/team/${id}/events/${span}/${page}`)

    return children(data || [], isLoading, error)
}

export const TeamTournametsProvider = ({ id, children }: TeamTournamentsProviderProps) => {
    const { data, isLoading, error } = useSWR<Tournament[]>(`/api/team/${id}/tournaments`)

    return children(data || [], isLoading, error)
}