import { Player } from "@/model/interface"
import { Flex, styled } from "../../styled-system/jsx"

export const PlayerCard = ({player}: {player: Player}) => {
    return <Flex>
        <styled.img w="3xl" src={`https://academy-backend.sofascore.dev/player/${player.id}/image`}/>
        <Flex direction="column">
            <styled.span>{player.name}</styled.span>
            <styled.span>{player.position}</styled.span>
        </Flex>
    </Flex>
}