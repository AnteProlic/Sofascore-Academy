import { Sport } from "@/model/interface"
import { Flex, styled } from "../../../../styled-system/jsx"
import { SafeImage } from "@/components/SafeImage"

export const SportIcon = ({sport}: {sport: Sport}) => {

    return <Flex
    alignItems="center"
    w={{base: "4xl", sm: "100%"}}
    paddingX="md"
    cursor={{ _hover: "pointer"}}
    color="text.default"
    textDecoration={{_hover: "underline"}}
    direction="column"
    gap="xs">
        <styled.div w={{base: "2xl", sm: "100%"}}>
            <SafeImage src={`/sports/${sport.slug}.png`} alt={`${sport.slug}`}/>
        </styled.div>
        <Flex
        textAlign="center"
        color="text.default"
        textStyle="body.small"
        display={{base: "none", sm: "flex"}}
        >{sport.name}</Flex>
    </Flex>
}