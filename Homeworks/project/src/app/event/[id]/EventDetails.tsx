"use client"
import { Flex } from "../../../../styled-system/jsx"
import { EventDetailsProvider, EventIncidentProvider } from "@/model/EventProvider"

export const EventDetails = ({id}: {id: number}) => {
  return (
    <EventDetailsProvider id={id}>
            {event => (
                <Flex
                direction="column">
                  <div>{event.id}</div>
                  <div>{event.startDate}</div>
                  <div>{event.tournament.name}</div>
                  <div>{event.homeTeam.name} VS {event.awayTeam.name}</div>
                  <div>{event.homeScore.total} : {event.awayScore.total}</div>
                  <div>{event.status}</div>
                  <EventIncidentProvider id={id}>
                    {incidents => <Flex direction="column">
                      {incidents.map(incident => (<Flex direction="column" key={incident.id}>
                        <br></br>
                        <div>id: {incident.id}</div>
                        <div>type: {incident.type}</div>
                        <div>time: {incident.time}</div>
                      </Flex>))}
                    </Flex>}
                  </EventIncidentProvider>
                </Flex>
            )}
        </EventDetailsProvider>
    
  )
}