"use client"
import { parseTime } from "@/model/functions"
import { Flex, styled } from "../../../../styled-system/jsx"
import { EventDetailsProvider, EventIncidentProvider } from "@/model/EventProvider"
import { TeamCard } from "./components/TeamCard"
import { IncidentCard } from "./components/IncidentCard"

export const EventDetails = ({id}: {id: number}) => {
  return (
    <EventDetailsProvider id={id}>
            {event => {
              const {year, month, day, hour, min} = parseTime(event.startDate ?? "")
              return (
                <Flex
                direction="column"
                alignItems="center">
                  <div>{day}.{month}.{year}. | {hour}:{min} | {event.tournament.name}</div>
                  <Flex 
                  direction="column"
                  alignItems="center"
                  w="100%"
                  marginBottom="4xl">
                    <Flex alignItems="center" textStyle="display.large">
                      <TeamCard team={event.homeTeam}/>
                      <Flex direction="column" alignItems="center" gap="md">
                        <styled.span textStyle="display.extraLarge" textAlign="center" w="128px">{event.homeScore.total} : {event.awayScore.total}</styled.span>
                        <styled.span textTransform="uppercase" textAlign="center" w="128px">{event.status}</styled.span>
                      </Flex>
                      <TeamCard team={event.awayTeam}/>
                    </Flex>
                  </Flex>
                  <EventIncidentProvider id={id}>
                    {incidents => <Flex direction="column">
                      {incidents.map(incident => (<Flex direction="column" key={incident.id} width={`calc(${516}px + ${128}px)`}>
                        <IncidentCard incident={incident}/>
                      </Flex>))}
                    </Flex>}
                  </EventIncidentProvider>
                </Flex>
            )}}
        </EventDetailsProvider>
    
  )
}