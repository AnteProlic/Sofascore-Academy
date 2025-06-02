import { Flex, styled } from "../../styled-system/jsx"
import { SportsList } from "./components/SportsList"

export const Sidebar = () => {
    const margin = 12
    const width = 56

    return <Flex >
        <SportsList />

        <Flex direction="column"
        bg="background.primary"
        position="fixed"
        h={`calc(100% - ${margin*2}px)`}
        w="256px"
        left={`calc(${width}px + ${margin}px)`}
        margin="md"
        borderRadius="md">
            tournaments, clubs...
        </Flex>
    </Flex>
}