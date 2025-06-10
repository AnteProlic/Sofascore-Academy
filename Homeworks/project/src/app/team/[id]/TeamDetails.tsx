"use client"

import { TeamEventsProvider, TeamPlayersProvider, TeamProvider, TeamTournametsProvider } from "@/model/TeamProvider"
import { Flex, styled } from "../../../../styled-system/jsx"
import { Span } from "@/model/interface"
import { EventCard } from "@/components/EventCard"
import { PlayerCard } from "./components/PlayerCard"
import Link from "next/link"
import { getTeamImage } from "@/api/routes"
import { SafeImage } from "@/components/SafeImage"

export const TeamDetails = ({id}: {id: number}) => {

    return <TeamProvider id={id}>
        {(team, error) => <Flex direction="column" gap="md">
            <Flex w="100%" direction="column">
                <Flex
                alignItems="flex-start"
                marginTop="lg"
                marginLeft="lg"
                h="128px"
                gap="xl">
                    <styled.div
                        w="124px"
                        bg="background.img"
                        p="sm"
                        borderRadius="sm">
                        <SafeImage 
                            src={getTeamImage(id)} alt={`${team.name}`} />
                    </styled.div>
                    <Flex direction="column" color="text.title">
                        {!error && <styled.span fontWeight="bold" fontSize="24px" marginBottom="-24px">{team.country.name}, {team.venue}</styled.span>}
                        <styled.span fontWeight="bolder" fontSize="72px">{team.name}</styled.span>
                        {!error && <styled.span fontWeight="bold" fontSize="16px" marginTop="-12px">Manager: {team.managerName}</styled.span>}
                    </Flex>
                </Flex>
            </Flex>
            <Flex gap="md">
                <Flex direction="column" w="50%" p="sm" bg="background.tertiary" borderRadius="md" color="text.default">
                    <TeamPlayersProvider id={id}>
                        {positions => <Flex direction="column" gap="xs">
                            <styled.span textStyle="display.large">Players: </styled.span>
                            {positions.map(pos => (
                                <Flex key={pos.name} direction="column" gap="sm" w="100%" paddingY="sm">
                                    <styled.span textStyle="display.medium">{pos.name}</styled.span>
                                    <Flex flexWrap="wrap" gap="sm"> 
                                        {pos.players.map(player => 
                                            <PlayerCard key={player.id} player={player}/>
                                        )}
                                    </Flex>
                                </Flex>
                            ))}
                        </Flex>}
                    </TeamPlayersProvider>
                </Flex>
                <Flex direction="column" w="50%" bg="background.tertiary" p="md" borderRadius="md" color="text.default">
                    <TeamTournametsProvider id={id}>
                        {tournaments => (
                            <Flex direction="column">
                                <styled.span textStyle="display.large">Tournament standings:</styled.span>
                                    <Flex flexWrap="wrap" w="100%" paddingY="md">
                                        {tournaments.map(tournament => (
                                        <Link key={tournament.id} href={`/tournament/${tournament.id}/standings`}>
                                            <styled.span bg="background.primary" color="text.default" w="fit-content" 
                                            textDecoration={{_hover: "underline"}}
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
                            <styled.span textStyle="display.large">Events:</styled.span>
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