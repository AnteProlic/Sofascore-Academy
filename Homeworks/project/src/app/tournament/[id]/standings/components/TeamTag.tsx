import { Team } from "@/model/interface";
import { Flex, styled } from "../../../../../../styled-system/jsx";
import { SafeImage } from "@/components/SafeImage";
import Link from "next/link";
import { getTeamImage } from "@/api/routes";

export const TeamTag = ({team}: {team: Team}) => {
    
    return <Link href={`/team/${team.id}`}>
        <Flex w="256px" gap="xs" paddingLeft="md" textDecoration={{_hover: "underline"}}>
            <Flex w="xl" alignItems="center">
                <SafeImage 
                src={getTeamImage(team.id)}
                placeholder="/sports/sports.png"
                alt={`${team.name}`}/>
            </Flex>
            <styled.div>
                {team.name}
            </styled.div>
        </Flex>
    </Link>
}