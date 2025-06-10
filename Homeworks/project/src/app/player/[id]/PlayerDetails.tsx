"use client"
import { PlayerEventsProvider, PlayerProvider } from "@/model/PlayerProvider"
import { Flex, styled } from "../../../../styled-system/jsx"
import { EventDetailsProvider } from "@/model/EventProvider"
import { Span, Event } from "@/model/interface"
import { EventCard } from "@/components/EventCard"
import { SafeImage } from "@/components/SafeImage"
import { getPlayerImage } from "@/api/routes"
import { useTheme } from "@/model/Context"

export const PlayerDetails = ({id}: {id: number}) => {    
  return (
    <PlayerProvider id={id}>
        {player => <Flex>
          <Flex direction="column" width="50%" h="100%" alignItems="center">
            <styled.div bg="background.primary" w={`calc(100% - 24px)`} h="auto" aspectRatio="1/1" p="md" borderRadius="md">
              <SafeImage src={getPlayerImage(player.id)} alt={player.slug} placeholder="/user.png"/>
              <Flex direction="column" bg="linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);"
               h="128px" position="relative" 
               top="-128px" 
               color="text.default" 
               justifyContent="flex-end" 
               gap="sm" 
               paddingBottom="sm">
                <styled.span textStyle="display.extraLarge" paddingX="md">{player.name}</styled.span>
                <styled.span textStyle="display.medium" textTransform="uppercase" paddingX="md">{player.country.name}</styled.span>
              </Flex>
            </styled.div>
          </Flex>
          <PlayerEventsProvider id={id} span={Span.last} page={0} >
            {events => (
              <Flex direction="column" width="50%" gap="xs" p="sm" 
              bg="background.tertiary" color="text.default" borderRadius="md">
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