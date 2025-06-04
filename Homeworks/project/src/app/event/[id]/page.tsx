import { TournamentEventProvider } from "@/model/TournamentProvider"
import { Flex } from "../../../../styled-system/jsx"
import { EventDetails } from "./EventDetails"

export default async function Event ({
  params,
}: {
  params: Promise<{ id: string }>
}) {
    const { id } = await params
    return <EventDetails id={Number(id)}/>
}