"use client"

import { TeamPlayersProvider, TeamProvider } from "@/model/TeamProvider"
import { Flex, styled } from "../../../../styled-system/jsx"

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
        </Flex>}
    </TeamProvider>
}