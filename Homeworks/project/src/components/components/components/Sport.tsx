import { Flex } from "../../../../styled-system/jsx"

export const Sport = ({name}: {name: string}) => {
    return <Flex
    alignItems="center"
    h="3xl"
    paddingX="md"
    cursor={{ _hover: "pointer"}}
    textDecoration={{ _hover: "underline" }}
    >
        {name}
    </Flex>
}