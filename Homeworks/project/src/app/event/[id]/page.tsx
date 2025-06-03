import { TournamentEventProvider } from "@/model/TournamentProvider"
import { Flex } from "../../../../styled-system/jsx"
import { EventPage } from "./EventPage"

export default async function Sport ({
  params,
}: {
  params: Promise<{ id: string }>
}) {
    const { id } = await params
    return <EventPage id={Number(id)}/>
}