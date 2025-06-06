import { Team } from "@/model/interface"
import { Flex, styled } from "../../../styled-system/jsx"
import Link from "next/link"
import { SafeImage } from "../SafeImage"

export const EventScore = ({team, score}: {team: Team, score: number}) => {

    return <Flex w="256px" h="2xl" justifyContent="space-between" alignItems="center">
        <Link href={`/team/${team.id}`} onClick={(e) => e.stopPropagation()}>
            <Flex textDecoration={{_hover: "underline"}} gap="sm" alignItems="center">
                <Flex w="xl" h="auto" aspectRatio="1/1">
                    <SafeImage 
                    src={`https://academy-backend.sofascore.dev/team/${team.id}/image`}
                    placeholder="/sports/sports.png"
                    alt={team.name}/>
                </Flex>
                <styled.span>{team.name}</styled.span>
            </Flex>
        </Link>
        <styled.span>{score}</styled.span>
    </Flex>
}