import { Player } from "@/model/interface"
import { styled, Flex } from "../../../../../styled-system/jsx"
import { SafeImage } from "@/components/SafeImage"
import { redirect } from "next/navigation"


export const PlayerCard = ({player}: {player: Player}) => {
    return <Flex h="5xl" alignItems="center" gap="sm" 
        bg="background.tertiary" w="30%" color="text.default" 
        p="xs" borderRadius="md" 
        onClick={() => redirect(`/player/${player.id}`)}
        cursor={{_hover: "pointer"}}>
        <styled.div w="3xl" h="3xl" bg="black" borderRadius="50%" overflow="clip" border="solid 2px" borderColor="background.primary">
            <SafeImage 
                src={`https://academy-backend.sofascore.dev/player/${player.id}/image`}
                alt={player.slug}
                placeholder="/user.png"/>

        </styled.div>
        
        <Flex direction="column">
            <styled.span>{player.name}</styled.span>
            <styled.span>{player.position}</styled.span>
        </Flex>
    </Flex>
}