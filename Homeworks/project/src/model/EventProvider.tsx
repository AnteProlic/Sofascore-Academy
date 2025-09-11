"use client"

import useSWR from "swr"
import { Event, Incident } from "./interface"
import { dummyEvent } from "./Dummies"

interface EventProviderProps {
  slug: string
  date: string
  children: (
    sportsList: Event[],
    isLoading: boolean,
    error: Error | null
  ) => React.ReactNode
}

interface EventDetailsProviderProps {
  id: number
  children: (
    sportsList: Event,
    isLoading: boolean,
    error: Error | null
  ) => React.ReactNode
}

interface EventIncidentProviderProps {
  id: number
  children: (
    incidents: Incident[],
    isLoading: boolean,
    error: Error | null
  ) => React.ReactNode
}

export const EventProvider = ({ slug, date, children }: EventProviderProps) => {
    const { data, isLoading, error } = useSWR<Event[]>(`/api/sport/${slug}/events/${date}`)

    return children(data || [], isLoading, error)
}

export const EventDetailsProvider = ({ id, children }: EventDetailsProviderProps) => {
    const { data, isLoading, error } = useSWR<Event>(`/api/event/${id}`)

    return children(data || dummyEvent, isLoading, error)
}

export const EventIncidentProvider = ({ id, children }: EventIncidentProviderProps) => {
    const { data, isLoading, error } = useSWR<Incident[]>(`/api/event/${id}/incidents`)

    return children(data || [], isLoading, error)
}