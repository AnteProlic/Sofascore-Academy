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
    justifyContent={{base:"space-between"}}
    fontSize={{base: "min(3vw, 12px)", sm:"14px", md:"16px" }}>
        <Flex direction="column" w="fit-content">
            <EventScore team={event.homeTeam} score={event.homeScore.total}/>
            <EventScore team={event.awayTeam} score={event.awayScore.total}/>
        </Flex>
        <Flex display={{base: "none", sm:"flex" }} marginX={{base: "24px", sm:"4xl" }} w={{base: "12px", sm:"16px", md:"20%" }} textAlign="center" textTransform="uppercase">{event.status}</Flex>
        <styled.span marginX={{base: "24px", sm:"4xl" }} w={{base: "56px", sm:"24px", md:"20%" }} textAlign="center" textDecoration={{_hover: "underline"}}>
            <Link href={`/tournament/${event.tournament.id}`} onClick={e => e.stopPropagation()}>{event.tournament.name}</Link>
        </styled.span>
        <Flex justifyContent="end" w={{base: "56px", sm:"156px", md:"20%" }}>
            <Flex direction="column" w={{base: "fit-content", sm:"200px" }}>
                <styled.span textAlign="center">{day}.{month}.{year}.</styled.span>
                <styled.span textAlign="center">{hour}:{min}</styled.span>
            </Flex>
        </Flex>
    </Flex>
}