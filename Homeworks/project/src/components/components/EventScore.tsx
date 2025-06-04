import { Team } from "@/model/interface"
import { Flex, styled } from "../../../styled-system/jsx"

export const EventScore = ({team, score}: {team: Team, score: number}) => {

    return <Flex w="516px" justifyContent="space-between">
        <Flex>
            <styled.img />
            <styled.span>{team.name}</styled.span>
        </Flex>
        <styled.span>{score}</styled.span>
    </Flex>
}