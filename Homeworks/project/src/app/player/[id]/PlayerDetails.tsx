"use client"
import { PlayerEventsProvider, PlayerProvider } from "@/model/PlayerProvider"
import { Flex, styled } from "../../../../styled-system/jsx"
import { EventDetailsProvider } from "@/model/EventProvider"
import { Span, Event } from "@/model/interface"

export const PlayerDetails = ({id}: {id: number}) => {
  return (
    <PlayerProvider id={id}>
        {player => <Flex direction="column">
            <div>{player.id}</div>
            <div>{player.name}</div>
            <div>{player.country.name}</div>
            <div>{player.position}</div>
            <styled.img w="4xl" src={`https://academy-backend.sofascore.dev/player/${id}/image`}/>
            <PlayerEventsProvider id={id} span={Span.last} page={0} >
              {events => (
                <Flex direction="column">
                  <div>Events:</div>
                  {events.map(event => (
                    // @ts-ignore
                    <div key={event.id}>{event.slug}</div>
                  ))}
                </Flex>
              )}
            </PlayerEventsProvider>
        </Flex>}
    </PlayerProvider>  
  )
}