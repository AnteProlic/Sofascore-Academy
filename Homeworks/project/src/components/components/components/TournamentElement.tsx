import { Tournament } from "@/model/interface"
import { Flex, styled } from "../../../../styled-system/jsx"
import { SafeImage } from "@/components/SafeImage"
import { getTournamentImage } from "@/api/routes"

export const TournamentElement = ({tournament}: {tournament: Tournament}) => {
    return <Flex
    h="3xl"
    textDecoration={{_hover: "underline"}}
    paddingX="md"
    cursor={{ _hover: "pointer"}}
    gap="xs"
    alignItems="center"
    p="xs"
    >
        <styled.div h="100%" bg="background.img" borderRadius="50%">
            <SafeImage src={getTournamentImage(tournament.id)} alt={`${tournament.slug}`}/>
        </styled.div>
        <styled.span
        color="text.default"
        textStyle="body.large"
        >{tournament.name}</styled.span>
    </Flex>
}