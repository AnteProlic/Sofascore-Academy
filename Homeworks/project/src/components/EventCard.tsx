import { Event } from "@/model/interface"
import { Flex } from "../../styled-system/jsx"

export const EventCard = ({event}: {event: Event}) => {
    return <Flex key={event.id}
    direction="column">
        <br/>
        <div>{event.homeTeam.name} {event.homeScore.total}:{event.awayScore.total} {event.awayTeam.name}</div>
        <div>{event.startDate}</div>
    </Flex>
}