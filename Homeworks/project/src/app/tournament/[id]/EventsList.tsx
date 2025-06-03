"use client"

import { AllTournamentsProvider, TournamentEventProvider, TournamentProvider } from "@/model/TournamentProvider"
import { Flex } from "../../../../styled-system/jsx"
import { EventCard } from "@/components/EventCard"

export const EventsList = ({id, span, page}: {id: number, span: "last"|"next", page: number}) => {
  return (
    <div>
      
      <TournamentProvider id={Number(id)}>
        {tournament => (<div>{tournament.name}</div>)}
      </TournamentProvider>
      <TournamentEventProvider id={id} span={span} page={page}>
        {(events) => (
          <Flex direction="column">
            {events.map(event => (
              <EventCard key={event.slug} event={event}/>
            ))}
          </Flex>
        )}
      </TournamentEventProvider>
    </div>
  )
}