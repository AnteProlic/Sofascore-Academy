import { Sport, Tournament } from "@/model/interface"
import { Flex, styled } from "../../../../styled-system/jsx"
import { TournamentProvider } from "@/model/TournamentProvider"
import { SafeImage } from "@/components/SafeImage"
import { getTournamentImage } from "@/api/routes"

export const TournamentElement = ({tournament}: {tournament: Tournament}) => {
    return <Flex
    h="2xl"
    textDecoration={{_hover: "underline"}}
    paddingX="md"
    cursor={{ _hover: "pointer"}}
    gap="xs"
    alignItems="center"
    >
        <styled.div h="100%">
            <SafeImage src={getTournamentImage(tournament.id)} alt={`${tournament.slug}`}/>
        </styled.div>
        <styled.span
        color="text.default"
        textStyle="body.large"
        >{tournament.name}</styled.span>
    </Flex>
}