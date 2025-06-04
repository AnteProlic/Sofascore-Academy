"use client"
import { PlayerProvider } from "@/model/PlayerProvider"
import { Flex, styled } from "../../../../styled-system/jsx"
import { EventDetailsProvider } from "@/model/EventProvider"

export const PlayerDetails = ({id}: {id: number}) => {
  return (
    <PlayerProvider id={id}>
        {player => <Flex direction="column">
            <div>{player.id}</div>
            <div>{player.name}</div>
            <div>{player.country.name}</div>
            <div>{player.position}</div>
            <styled.img w="4xl" src={`https://academy-backend.sofascore.dev/player/${id}/image`}/>
        </Flex>}
    </PlayerProvider>  
  )
}