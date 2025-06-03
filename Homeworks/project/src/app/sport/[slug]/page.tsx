import { TournamentEventProvider } from "@/model/TournamentProvider"
import { Flex } from "../../../../styled-system/jsx"
import { EventsList } from "./EventsList"

export default async function Sport ({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    return <EventsList slug={slug}/>
}