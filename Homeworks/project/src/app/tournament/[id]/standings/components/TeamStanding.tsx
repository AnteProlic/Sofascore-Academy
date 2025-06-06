import { StandingRow } from "@/model/interface"
import { Flex, styled } from "../../../../../../styled-system/jsx"
import Link from "next/link"
import { TeamTag } from "./TeamTag"

export const TeamStanding = ({index, row}: {index: number, row: StandingRow}) => {

    return <Flex w="100%" h="2xl" alignItems="center" paddingX="md" textAlign="center">
        <styled.div w="25px">{index}</styled.div>
        <TeamTag team={row.team}/>
        <styled.div w="40px">{row.played}</styled.div>
        <styled.div w="40px">{row.wins}</styled.div>
        <styled.div w="40px">{row.draws}</styled.div>
        <styled.div w="40px">{row.losses}</styled.div>
        <styled.div w="60px">{row.scoresFor - row.scoresAgainst}</styled.div>
        <Flex w="80px" justifyContent="center">
            <styled.span w="20px" textAlign="right" marginRight="2px">{row.scoresFor}</styled.span>
            <styled.span w="5px">:</styled.span>
            <styled.span w="20px" textAlign="left" marginLeft="2px">{row.scoresAgainst}</styled.span>
        </Flex>
        <styled.div w="80px">{row.points}</styled.div>
    </Flex>
}