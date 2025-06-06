import { Sport } from "@/model/interface"
import { Flex, styled } from "../../../../styled-system/jsx"

export const SportIcon = ({sport}: {sport: Sport}) => {

    return <Flex
    alignItems="center"
    h="4xl"
    paddingX="md"
    cursor={{ _hover: "pointer"}}
    direction="column"
    gap="xs">
        <styled.img 
        w="100%"
        src={`/sports/${sport.slug}.png`} />
        <styled.span
        textAlign="center"
        color="text.default"
        textStyle="body.small"
        >{sport.name}</styled.span>
    </Flex>
}