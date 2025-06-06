import { Span } from "@/model/interface"
import { StandingsList } from "./StandingsList"
import { Flex } from "../../../../../styled-system/jsx"

export default async function Tournament ({
  params,
}: {
  params: Promise<{ id: string }>
}) {
    const { id } = await params
    return <Flex>
      <StandingsList id={Number(id)}/>
    </Flex>
}