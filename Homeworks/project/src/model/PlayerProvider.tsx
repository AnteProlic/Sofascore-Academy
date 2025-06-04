"use client"

import useSWR from "swr"
import { Player, Sport } from "./interface"
import { dummyPlayer } from "./Dummies"

interface PlayerProviderProps {
    id: number
    children: (
        player: Player,
        isLoading: boolean,
        error: Error | null
    ) => React.ReactNode
}

export const PlayerProvider = ({ id, children }: PlayerProviderProps) => {
    const { data, isLoading, error } = useSWR<Player>(`/api/player/${id}`)

    return children(data || dummyPlayer, isLoading, error)
}