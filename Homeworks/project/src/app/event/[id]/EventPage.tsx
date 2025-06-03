"use client"

import { AllTournamentsProvider, TournamentEventProvider } from "@/model/TournamentProvider"
import { Flex } from "../../../../styled-system/jsx"
import { EventCard } from "@/components/EventCard"
import { Span } from "@/model/interface"
import { EventDetailsProvider } from "@/model/EventProvider"

export const EventPage = ({id}: {id: number}) => {
  return (
    <EventDetailsProvider id={id}>
            {event => (
                <Flex
                direction="column">
                  <div>{event.id}</div>
                  <div>{event.startDate}</div>
                  <div>{event.tournament.name}</div>
                  <div>{event.homeTeam.name} VS {event.awayTeam.name}</div>
                  <div>{event.homeScore.total} : {event.awayScore.total}</div>
                  <div>{event.status}</div>
                </Flex>
            )}
        </EventDetailsProvider>
    
  )
}