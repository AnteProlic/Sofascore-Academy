import { Sport } from "@/model/interface"
import { Flex, styled } from "../../../../styled-system/jsx"
import { useSport } from "@/model/SportContextProvider";

export const SportIcon = ({slug}: {slug: string}) => {

    const { sport, setSport } = useSport();

    return <Flex
    alignItems="center"
    h="4xl"
    paddingX="md"
    cursor={{ _hover: "pointer"}}
    direction="column"
    gap="xs"
    onClick={() => {
        setSport(slug)
    }}
    >
        <styled.img 
        w="100%"
        src={`/sports/${slug}.png`} />
        <styled.span
        textAlign="center"
        color="text.default"
        textStyle="body.small"
        >{slug}</styled.span>
    </Flex>
}