import { StandingRow } from "@/model/interface"
import { Flex, styled } from "../../../../../../styled-system/jsx"

export const TeamStanding = ({index, row}: {index: number, row: StandingRow}) => {

    return <Flex>
        <styled.span w="25px">{index}</styled.span>
        <styled.span w="200px">{row.team.name}</styled.span>
        <styled.span w="50px">{row.played}</styled.span>
        <styled.span w="50px">{row.wins}</styled.span>
        <styled.span w="50px">{row.draws}</styled.span>
        <styled.span w="75px">{row.losses}</styled.span>
        <styled.span w="50px">{row.scoresFor - row.scoresAgainst}</styled.span>
        <styled.span w="75px">{row.scoresFor}:{row.scoresAgainst}</styled.span>
        <styled.span w="50px">{row.points}</styled.span>
    </Flex>
}