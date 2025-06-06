import { Team } from "@/model/interface";
import { Flex, styled } from "../../../../../styled-system/jsx";
import Link from "next/link";

export const TeamCard = ({team}: {team: Team}) => {
    return <Link href={`/team/${team.id}`}>
        <Flex 
        direction="column"
        alignItems="center"
        w="256px"
        textDecoration={{_hover: "underline"}}
        cursor={{_hover: "pointer"}}>
            <styled.img m="md" src={`https://academy-backend.sofascore.dev/team/${team.id}/image`}/>
            <styled.span>{team.name}</styled.span>
        </Flex>
    </Link>
}