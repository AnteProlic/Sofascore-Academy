import { Sport, Tournament } from "@/model/interface"
import { Flex, styled } from "../../../../styled-system/jsx"
import { TournamentProvider } from "@/model/TournamentProvider"

export const TournamentElement = ({tournament}: {tournament: Tournament}) => {
    return <Flex
    h="2xl"
    textDecoration={{_hover: "underline"}}
    paddingX="md"
    cursor={{ _hover: "pointer"}}
    gap="xs"
    alignItems="center"
    >
        <styled.img src={`https://academy-backend.sofascore.dev/tournament/${tournament.id}/image`} h="100%"/>
        <styled.span
        color="text.default"
        textStyle="body.large"
        >{tournament.name}</styled.span>
    </Flex>
}