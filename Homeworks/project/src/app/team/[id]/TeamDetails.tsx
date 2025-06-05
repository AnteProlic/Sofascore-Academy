"use client"

import { TeamEventsProvider, TeamPlayersProvider, TeamProvider, TeamTournametsProvider } from "@/model/TeamProvider"
import { Flex, styled } from "../../../../styled-system/jsx"
import { Span } from "@/model/interface"
import { EventCard } from "@/components/EventCard"
import { PlayerCard } from "@/components/PlayerCard"

export const TeamDetails = ({id}: {id: number}) => {
    return <TeamProvider id={id}>
        {team => <Flex direction="column">
            <Flex alignItems="center" w="100%">
                <Flex
                direction="column"
                alignItems="center">
                    <styled.img 
                    w="128px"
                    src={`https://academy-backend.sofascore.dev/team/${id}/image`} />
                    <styled.span>{team.name}</styled.span>
                </Flex>

                <Flex direction="column">
                    <styled.span>Location: {team.country.name}, {team.venue}</styled.span>
                    <styled.span>Manager: {team.managerName}</styled.span>
                </Flex>
            </Flex>
            <Flex>
                <Flex direction="column" w="50%">
                    <TeamPlayersProvider id={id}>
                        {players => <Flex direction="column">
                            <br />
                            <div>PLAYERS: </div>
                            {players.map(player => <PlayerCard key={player.id} player={player}/>)}
                        </Flex>}
                    </TeamPlayersProvider>
                </Flex>
                <Flex direction="column" w="50%">
                    <TeamTournametsProvider id={id}>
                        {tournaments => (<Flex direction="column">
                            <br />
                            <div>Tournaments:</div>
                            {tournaments.map(tournament => (
                                <div key={tournament.id}>{tournament.slug}</div>
                            ))}
                            </Flex>
                        )}
                    </TeamTournametsProvider>
                    <TeamEventsProvider id={id} span={Span.last} page={1}>
                        {events => (<Flex direction="column">
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