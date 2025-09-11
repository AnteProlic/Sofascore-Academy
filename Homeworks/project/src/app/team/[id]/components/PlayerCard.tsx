import { Player } from "@/model/interface"
import { styled, Flex } from "../../../../../styled-system/jsx"
import { SafeImage } from "@/components/SafeImage"
import { redirect } from "next/navigation"
import { getPlayerImage } from "@/api/routes"

export const PlayerCard = ({player}: {player: Player}) => {
    return <Flex h="5xl" alignItems="center" gap="sm" 
        bg="background.primary" w="180px" color="text.default" 
        p="xs" borderRadius="md" 
        onClick={() => redirect(`/player/${player.id}`)}
        cursor={{_hover: "pointer"}}>
        <styled.div h="3xl" w="auto" aspectRatio="1/1" bg="background.bg" borderRadius="50%" overflow="clip" 
        border="solid 2px" borderColor="background.primary">
            <SafeImage 
                src={getPlayerImage(player.id)}
                alt={player.slug}
                placeholder="/user.png"/>
        </styled.div>
        
        <Flex direction="column" w="100%">
            <styled.span w="90%" h="xl" textOverflow="ellipsis" whiteSpace="nowrap" overflow="hidden">{player.name}</styled.span>
            <styled.span>{player.position}</styled.span>
        </Flex>
    </Flex>
}