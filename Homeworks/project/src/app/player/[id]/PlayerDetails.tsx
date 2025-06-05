"use client"
import { PlayerEventsProvider, PlayerProvider } from "@/model/PlayerProvider"
import { Flex, styled } from "../../../../styled-system/jsx"
import { EventDetailsProvider } from "@/model/EventProvider"
import { Span, Event } from "@/model/interface"
import { EventCard } from "@/components/EventCard"

export const PlayerDetails = ({id}: {id: number}) => {
  return (
    <PlayerProvider id={id}>
        {player => <Flex>
          <Flex direction="column" width="50%">
            <styled.div bg="black" w="fit-content" p="md">
              <styled.img w="256px" src={`https://academy-backend.sofascore.dev/player/${id}/image`}/>
            </styled.div>
            <Flex direction="column">
              <styled.span textStyle="display.extraLarge">{player.name}</styled.span>
              <styled.span textStyle="display.large" textTransform="uppercase">{player.country.name}</styled.span>
            <div>{player.position}</div>
            </Flex>
          </Flex>
            <PlayerEventsProvider id={id} span={Span.last} page={0} >
              {events => (
                <Flex direction="column" width="50%">
                  <div>Events:</div>
                  {events.map(event => (
                    // @ts-ignore
                    <EventCard key={event.id} event={event}/>
                  ))}
                </Flex>
              )}
            </PlayerEventsProvider>
        </Flex>}
    </PlayerProvider>  
  )
}