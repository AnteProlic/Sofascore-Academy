"use client"

import { TeamEventsProvider, TeamPlayersProvider, TeamProvider, TeamTournametsProvider } from "@/model/TeamProvider"
import { Flex, styled } from "../../../../styled-system/jsx"
import { Span } from "@/model/interface"
import { EventCard } from "@/components/EventCard"
import { PlayerCard } from "./components/PlayerCard"
import Link from "next/link"

export const TeamDetails = ({id}: {id: number}) => {
    return <TeamProvider id={id}>
        {team => <Flex direction="column">
            <Flex w="100%" direction="column">
                <Flex
                alignItems="flex-start"
                marginTop="lg"
                marginLeft="lg"
                h="128px"
                gap="xl">
                    <styled.img 
                    w="112px"
                    src={`https://academy-backend.sofascore.dev/team/${id}/image`} />
                    <Flex direction="column">
                        <styled.span fontWeight="bold" fontSize="24px" marginBottom="-24px">{team.country.name}, {team.venue}</styled.span>
                        <styled.span fontWeight="bolder" fontSize="72px">{team.name}</styled.span>
                        <styled.span fontWeight="bold" fontSize="16px" marginTop="-12px">Manager: {team.managerName}</styled.span>
                    </Flex>
                </Flex>
            </Flex>
            <Flex>
                <Flex direction="column" w="50%">
                    <TeamPlayersProvider id={id}>
                        {positions => <Flex direction="column" gap="xs">
                            <br />
                            <div>PLAYERS: </div>
                            {positions.map(pos => (
                                <Flex key={pos.name} direction="column" gap="xs" w="100%">
                                    <div >{pos.name}</div>
                                    <Flex flexWrap="wrap" gap="xs"> 
                                        {pos.players.map(player => 
                                            <PlayerCard key={player.id} player={player}/>
                                        )}
                                    </Flex>
                                </Flex>
                            ))}
                        </Flex>}
                    </TeamPlayersProvider>
                </Flex>
                <Flex direction="column" w="50%">
                    <TeamTournametsProvider id={id}>
                        {tournaments => (
                            <Flex direction="column">
                                <div>Tournament standings:</div>
                                    <Flex flexWrap="wrap" bg="red" w="100%" paddingY="md">
                                        {tournaments.map(tournament => (
                                        <Link key={tournament.id} href={`/tournament/${tournament.id}/standings`}>
                                            <styled.span bg="black" color="text.default" w="fit-content" 
                                            paddingY="xs"
                                            paddingX="md"
                                            borderRadius="lg"
                                            key={tournament.id}
                                            >{tournament.name}</styled.span>
                                        </Link>
                                    ))}
                                </Flex>
                            </Flex>
                        )}
                    </TeamTournametsProvider>
                    <TeamEventsProvider id={id} span={Span.last} page={1}>
                        {events => (<Flex direction="column" gap="xs">
                            <br />
                            <div>Events:</div>
                            {events.map(event => (
                                // @ts-ignore
                                <EventCard key={event.id} event={event}/>
                            ))}
                            </Flex>
                        )}
                    </TeamEventsProvider>
                </Flex>
            </Flex>
        </Flex>}
    </TeamProvider>
}