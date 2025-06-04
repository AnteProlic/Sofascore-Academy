"use client"

import { TeamEventsProvider, TeamPlayersProvider, TeamProvider, TeamTournametsProvider } from "@/model/TeamProvider"
import { Flex, styled } from "../../../../styled-system/jsx"
import { Span } from "@/model/interface"

export const TeamDetails = ({id}: {id: number}) => {
    return <TeamProvider id={id}>
        {team => <Flex direction="column">
            <div>{team.name}</div>
            <div>{team.country.name}</div>
            <div>{team.venue}</div>
            <div>{team.managerName}</div>
            <styled.img 
            w="4xl"
            src={`https://academy-backend.sofascore.dev/team/${id}/image`} />
            <TeamPlayersProvider id={id}>
                {players => <Flex direction="column">
                    <br />
                    <div>PLAYERS: </div>
                    {players.map(player => <div key={player.id}>{player.name}</div>)}
                </Flex>}
            </TeamPlayersProvider>
            <TeamEventsProvider id={id} span={Span.last} page={1}>
                {events => (<Flex direction="column">
                    <br />
                    <div>Events:</div>
                    {events.map(event => (
                        // @ts-ignore
                        <div key={event.id}>{event.slug}</div>
                    ))}
                    </Flex>
                )}
            </TeamEventsProvider>
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
        </Flex>}
    </TeamProvider>
}