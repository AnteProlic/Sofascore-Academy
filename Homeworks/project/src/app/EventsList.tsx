"use client"

import { AllTournamentsProvider, TournamentEventProvider } from "@/model/TournamentProvider"
import { Flex } from "../../styled-system/jsx"
import { EventCard } from "@/components/EventCard"
import { Span } from "@/model/interface"
import { SportProvider } from "@/model/SportProvider"

export const EventsList = () => {
  return (
    <SportProvider>
        {sports => (<Flex direction="column">
            {sports.map(sport => (
                <AllTournamentsProvider key={sport.id} slug={sport.slug}>
                        {tournaments => (
                            <Flex
                            direction="column">
                            SPORT: {sport.name}
                            {tournaments.map(tournament => (
                                <TournamentEventProvider key={tournament.id} id={tournament.id} span={Span.last} page={1}>
                                {(events) => (
                                    <Flex direction="column">
                                    TOURNAMENT: {tournament.name}
                                    {events.map(event => (
                                        <EventCard event={event}/>
                                    ))}
                                    </Flex>
                                )}
                                </TournamentEventProvider>
                            ))}
                            </Flex>
                        )}
                    </AllTournamentsProvider>
            ))}
        </ Flex>)}
    </SportProvider>
    
  )
}