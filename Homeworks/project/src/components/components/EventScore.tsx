import { Team } from "@/model/interface"
import { Flex, styled } from "../../../styled-system/jsx"
import Link from "next/link"
import { SafeImage } from "../SafeImage"
import { getTeamImage } from "@/api/routes"

export const EventScore = ({team, score}: {team: Team, score: number}) => {

    return <Flex w={{base: "min(45vw,196px)", sm:"200px", md:"256px" }} h={{base: "24px", sm:"2xl" }} justifyContent="space-between" alignItems="center">
        <Link href={`/team/${team.id}`} onClick={(e) => e.stopPropagation()}>
            <Flex textDecoration={{_hover: "underline"}} gap="sm" alignItems="center">
                <Flex w={{base: "lg", sm:"xl" }} h="auto" aspectRatio="1/1">
                    <SafeImage 
                    src={getTeamImage(team.id)}
                    alt={team.name}/>
                </Flex>
                <styled.span fontSize="">{team.name}</styled.span>
            </Flex>
        </Link>
        <styled.span>{score}</styled.span>
    </Flex>
}