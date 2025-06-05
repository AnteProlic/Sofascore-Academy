import { Flex, styled } from "../../../../styled-system/jsx"

export const SportIcon = ({slug}: {slug: string}) => {

    return <Flex
    alignItems="center"
    h="4xl"
    paddingX="md"
    cursor={{ _hover: "pointer"}}
    direction="column"
    gap="xs"
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