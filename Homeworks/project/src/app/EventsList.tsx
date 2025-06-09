"use client"

import { AllTournamentsProvider, TournamentEventProvider } from "@/model/TournamentProvider"
import { Flex, styled } from "../../styled-system/jsx"
import { EventCard } from "@/components/EventCard"
import { Span } from "@/model/interface"
import { SportProvider } from "@/model/SportProvider"
import Link from "next/link"
import { SafeImage } from "@/components/SafeImage"
import { getTournamentImage } from "@/api/routes"

export const EventsList = () => {
  return (
    <SportProvider>
        {sports => (<Flex direction="column">
            {sports.map(sport => (
                <AllTournamentsProvider key={sport.id} slug={sport.slug}>
                        {tournaments => (
                            <Flex
                            w="100%"
                            direction="column" gap="sm">
                            {tournaments.map(tournament => (
                                <TournamentEventProvider key={tournament.id} id={tournament.id} span={Span.last} page={1}>
                                {(events) => (
                                    <Flex 
                                    bg="background.tertiary" w="100%" p="md"
                                    direction="column"
                                    borderRadius="md"
                                    gap="xs">
                                    <styled.span color="text.default" textDecoration={{_hover: "underline"}} w="fit-content">
                                        <Link href={`/tournament/${tournament.id}`}>
                                            <Flex alignItems="center" marginBottom="sm" gap="sm">
                                                <styled.div h="2xl" w="auto" aspectRatio="1/1" bg="background.bg" borderRadius="50%">
                                                    <SafeImage src={getTournamentImage(tournament.id)} alt={tournament.slug} />
                                                </styled.div>
                                                {tournament.name}
                                            </Flex>
                                        </Link>
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