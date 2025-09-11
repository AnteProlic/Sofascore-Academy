import { StandingRow } from "@/model/interface"
import { Flex, styled } from "../../../../../../styled-system/jsx"
import { TeamTag } from "./TeamTag"

export const TeamStanding = ({index, row}: {index: number, row: StandingRow}) => {

    return <Flex w="100%" h="2xl" alignItems="center" paddingX="md" textAlign="center">
        <styled.div w="25px">{index}</styled.div>
        <TeamTag team={row.team}/>
        <styled.div w="32px">{row.played}</styled.div>
        <styled.div w="32px">{row.wins}</styled.div>
        <styled.div w="32px">{row.draws}</styled.div>
        <styled.div w="32px">{row.losses}</styled.div>
        <styled.div w="64px">{row.scoresFor - row.scoresAgainst}</styled.div>
        <Flex w="128px" justifyContent="center">
            <styled.span w="56px" textAlign="right" marginRight="2px">{row.scoresFor}</styled.span>
            <styled.span w="4px">:</styled.span>
            <styled.span w="56px" textAlign="left" marginLeft="2px">{row.scoresAgainst}</styled.span>
        </Flex>
    </Flex>
}