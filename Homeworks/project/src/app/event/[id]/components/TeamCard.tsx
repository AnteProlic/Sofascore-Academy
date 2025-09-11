import { Team } from "@/model/interface";
import { Flex, styled } from "../../../../../styled-system/jsx";
import Link from "next/link";
import { getTeamImage } from "@/api/routes";
import { SafeImage } from "@/components/SafeImage";

export const TeamCard = ({team}: {team: Team}) => {
    return <Link href={`/team/${team.id}`}>
        <Flex 
        direction="column"
        alignItems="center"
        w="256px"
        textDecoration={{_hover: "underline"}}
        cursor={{_hover: "pointer"}}>
            <styled.div p="md" m="md" bg="background.img" borderRadius="md">
                <SafeImage src={getTeamImage(team.id)} alt={team.name}/>
            </styled.div>
            <styled.span>{team.name}</styled.span>
        </Flex>
    </Link>
}