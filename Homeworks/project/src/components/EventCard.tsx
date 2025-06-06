import { Event } from "@/model/interface"
import { Flex, styled } from "../../styled-system/jsx"
import { EventScore } from "./components/EventScore"
import { parseTime } from "@/model/functions"
import { redirect } from "next/navigation"
import Link from "next/link"

export const EventCard = ({event}: {event: Event}) => {
    const {year, month, day, hour, min} = parseTime(event.startDate ?? "")

    return <Flex 
    onClick={() => {
        redirect(`/event/${event.id}`)
    }}
    cursor={{_hover: "pointer"}}
    borderRadius="md"
    bg="background.primary"
    color="text.default"
    p="sm"
    w="100%"
    alignItems="center"
    justifyContent="space-between">
        <Flex direction="column">
            <EventScore team={event.homeTeam} score={event.homeScore.total}/>
            <EventScore team={event.awayTeam} score={event.awayScore.total}/>
        </Flex>
        <styled.span marginX="4xl" w="128px" textAlign="center" textDecoration={{_hover: "underline"}}>
            <Link href={`/tournament/${event.tournament.id}`} onClick={e => e.stopPropagation()}>{event.tournament.name}</Link></styled.span>
        <styled.span marginX="4xl" w="128px" textAlign="center">{event.status}</styled.span>
        <Flex direction="column" alignItems="center">
            <styled.span w="128px" textAlign="center">{day}.{month}.{year}.</styled.span>
            <styled.span w="128px" textAlign="center">{hour}:{min}</styled.span>
        </Flex>
    </Flex>
}