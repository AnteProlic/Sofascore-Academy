"use client"

import { AllTournamentsProvider, TournamentEventProvider } from "@/model/TournamentProvider"
import { Flex, styled } from "../../styled-system/jsx"
import { EventCard } from "@/components/EventCard"
import { Span } from "@/model/interface"
import { SportProvider } from "@/model/SportProvider"
import Link from "next/link"

export const EventsList = () => {
  return (
    <SportProvider>
        {sports => (<Flex direction="column">
            {sports.map(sport => (
                <AllTournamentsProvider key={sport.id} slug={sport.slug}>
                        {tournaments => (
                            <Flex
                            direction="column">
                            {tournaments.map(tournament => (
                                <TournamentEventProvider key={tournament.id} id={tournament.id} span={Span.last} page={1}>
                                {(events) => (
                                    <Flex 
                                    direction="column"
                                    gap="xs">
                                    <styled.span textDecoration={{_hover: "underline"}} w="fit-content">
                                        <Link href={`/tournament/${tournament.id}`}>{tournament.name}</Link>
                                    </styled.span>
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
            ))}
        </ Flex>)}
    </SportProvider>
    
  )
}