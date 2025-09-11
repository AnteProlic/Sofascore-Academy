import { Span } from "@/model/interface"
import { Flex } from "../../../../styled-system/jsx"
import { EventsList } from "./EventsList"

export default async function Tournament ({
  params,
}: {
  params: Promise<{ id: string }>
}) {
    const { id } = await params
    return <div>
      <EventsList id={Number(id)} span={Span.last} page={1}/>
    </div>
}