"use client"

import { AllTournamentsProvider, TournamentEventProvider } from "@/model/TournamentProvider"
import { Flex } from "../../../../styled-system/jsx"
import { EventCard } from "@/components/EventCard"
import { Span } from "@/model/interface"

export const EventsList = ({slug}: {slug: string}) => {
  return (
    <AllTournamentsProvider slug={slug}>
            {tournaments => (
                <Flex
                direction="column" w="100%">
                  {tournaments.map(tournament => (
                    <TournamentEventProvider key={tournament.id} id={tournament.id} span={Span.last} page={1}>
                      {(events) => (
                        <Flex direction="column" w="100%" gap="xs">
                          {tournament.name}
                          {events.map(event => (
                            <EventCard key={event.id} event={event}/>
                          ))}
                        </Flex>
                      )}
                    </TournamentEventProvider>
                  ))}
                </Flex>
            )}
        </AllTournamentsProvider>
    
  )
}