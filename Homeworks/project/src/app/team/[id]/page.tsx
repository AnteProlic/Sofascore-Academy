import { TournamentEventProvider } from "@/model/TournamentProvider"
import { Flex } from "../../../../styled-system/jsx"
import { TeamDetails } from "./TeamDetails"

export default async function Sport ({
  params,
}: {
  params: Promise<{ id: string }>
}) {
    const { id } = await params
    return <TeamDetails id={Number(id)}/>
}