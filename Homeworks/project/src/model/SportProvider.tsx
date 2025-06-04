"use client"

import useSWR from "swr"
import { Sport } from "./interface"

interface SportProviderProps {
  children: (
    sportsList: Sport[],
    isLoading: boolean,
    error: Error | null
  ) => React.ReactNode
}

export const SportProvider = ({ children }: SportProviderProps) => {
    const { data, isLoading, error } = useSWR<Sport[]>(`/api/sports`)

    return children(data || [], isLoading, error)
}