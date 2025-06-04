import { Team } from "@/model/interface";
import { Flex, styled } from "../../../../../styled-system/jsx";

export const TeamCard = ({team}: {team: Team}) => {
    return <Flex 
    direction="column"
    alignItems="center"
    w="256px">
        <styled.img m="md" src={`https://academy-backend.sofascore.dev/team/${team.id}/image`}/>
        <styled.span>{team.name}</styled.span>
    </Flex>
}