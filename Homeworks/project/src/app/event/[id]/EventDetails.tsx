"use client"
import { parseTime } from "@/model/functions"
import { Flex, styled } from "../../../../styled-system/jsx"
import { EventDetailsProvider, EventIncidentProvider } from "@/model/EventProvider"
import { TeamCard } from "./components/TeamCard"
import { IncidentCard } from "./components/IncidentCard"
import Link from "next/link"

export const EventDetails = ({id}: {id: number}) => {
  return (
    <EventDetailsProvider id={id}>
            {event => {
              const {year, month, day, hour, min} = parseTime(event.startDate ?? "")
              return (
                <Flex
                direction="column">
                  <styled.div paddingLeft="xs">{day}.{month}.{year}. | {hour}:{min} | 
                    <styled.span marginLeft="xs" textDecoration={{_hover: "underline"}}>
                      <Link href={`/tournament/${event.tournament.id}`}>
                        {event.tournament.name}
                      </Link>
                    </styled.span>
                  </styled.div>
                <Flex 
                direction="column"
                alignItems="center"
                w="100%">
                  <Flex alignItems="center" textStyle="display.large" marginBottom="3xl">
                    <TeamCard team={event.homeTeam}/>
                    <Flex direction="column" alignItems="center" gap="md">
                      <styled.span textStyle="display.extraLarge" textAlign="center" w="128px">{event.homeScore.total} : {event.awayScore.total}</styled.span>
                      <styled.span textTransform="uppercase" textAlign="center" w="128px">{event.status}</styled.span>
                    </Flex>
                    <TeamCard team={event.awayTeam}/>
                  </Flex>
                  <EventIncidentProvider id={id}>
                    {incidents => <Flex direction="column">
                      {incidents.map(incident => (<Flex direction="column" key={incident.id} width={`calc(${516}px + ${128}px)`}>
                        <IncidentCard incident={incident}/>
                      </Flex>))}
                    </Flex>}
                  </EventIncidentProvider>
                </Flex>
              </Flex>
            )}}
        </EventDetailsProvider>
    
  )
}