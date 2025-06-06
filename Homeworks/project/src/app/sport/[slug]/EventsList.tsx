"use client"

import { AllTournamentsProvider, TournamentEventProvider } from "@/model/TournamentProvider"
import { Flex, styled } from "../../../../styled-system/jsx"
import { EventCard } from "@/components/EventCard"
import { Span } from "@/model/interface"
import Link from "next/link"
import { EventProvider } from "@/model/EventProvider"

export const EventsList = ({slug}: {slug: string}) => {
  return (
    <EventProvider slug={slug} date={"2025-05-04"}>
            {events => (
                <Flex direction="column" gap="xs">
                  {events.map(event => (
                    <EventCard key={event.id} event={event}/>
                  ))}
                </Flex>
            )}
    </EventProvider>
    
  )
}