import { Span } from "@/model/interface"
import { StandingsList } from "./StandingsList"

export default async function Tournament ({
  params,
}: {
  params: Promise<{ id: string }>
}) {
    const { id } = await params
    return <div>
      <StandingsList id={Number(id)}/>
    </div>
}