import { TournamentEventProvider } from "@/model/TournamentProvider"
import { Flex } from "../../../../styled-system/jsx"
import { PlayerDetails } from "./PlayerDetails"

export default async function Sport ({
  params,
}: {
  params: Promise<{ id: string }>
}) {
    const { id } = await params
    return <PlayerDetails id={Number(id)}/>
}