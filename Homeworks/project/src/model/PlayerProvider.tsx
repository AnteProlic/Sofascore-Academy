"use client"

import useSWR from "swr"
import { Player, Span, Sport } from "./interface"
import { dummyPlayer } from "./Dummies"

interface PlayerProviderProps {
    id: number
    children: (
        player: Player,
        isLoading: boolean,
        error: Error | null
    ) => React.ReactNode
}

interface PlayerEventsProviderProps {
    id: number
    span: Span
    page: number
    children: (
        events: Event[],
        isLoading: boolean,
        error: Error | null
    ) => React.ReactNode
}

interface PlayerImageProviderProps {
    id: number
    fallback: string
    children: (
        src: string,
        isLoading: boolean,
        error: Error | null
    ) => React.ReactNode
}

export const PlayerProvider = ({ id, children }: PlayerProviderProps) => {
    const { data, isLoading, error } = useSWR<Player>(`/api/player/${id}`)

    return children(data || dummyPlayer, isLoading, error)
}

export const PlayerEventsProvider = ({ id, span, page, children }: PlayerEventsProviderProps) => {
    const { data, isLoading, error } = useSWR<Event[]>(`/api/player/${id}/events/${span}/${page}`)

    return children(data || [], isLoading, error)
}

export const PlayerImageProvider = ({ id, fallback, children }: PlayerImageProviderProps) => {
    let src = fallback
    const { data, isLoading, error } = useSWR<Blob>(`/api/player/${id}/image`)
    if(error) {
        console.log(id)
    }
    if (!error) {
        src = `https://academy-backend.sofascore.dev/player/${id}/image`
    }
    return children(src, isLoading, error)
}