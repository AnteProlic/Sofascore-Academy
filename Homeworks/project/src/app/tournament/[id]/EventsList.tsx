"use client"

import { AllTournamentsProvider, TournamentEventProvider, TournamentProvider } from "@/model/TournamentProvider"
import { Flex, styled } from "../../../../styled-system/jsx"
import { EventCard } from "@/components/EventCard"

export const EventsList = ({id, span, page}: {id: number, span: "last"|"next", page: number}) => {
  return (
    <Flex direction="column" gap="sm">
      <TournamentProvider id={Number(id)}>
        {tournament => (<Flex alignItems="center">
            <styled.img w="3xl" src={`https://academy-backend.sofascore.dev/tournament/${tournament.id}/image`} />
            <styled.span textStyle="display.extraLarge">{tournament.name}, {tournament.country.name}</styled.span>
          </Flex>)}
      </TournamentProvider>
      <TournamentEventProvider id={id} span={span} page={page}>
        {(events) => (
          <Flex direction="column" gap="xs">
            {events.map(event => (
              <EventCard key={event.id} event={event}/>
            ))}
          </Flex>
        )}
      </TournamentEventProvider>
    </Flex>
  )
}