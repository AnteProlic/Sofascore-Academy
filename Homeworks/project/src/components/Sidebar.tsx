import { Flex, styled } from "../../styled-system/jsx"
import { Favorites } from "./components/Favorites"
import { SportsList } from "./components/SportsList"
import { TournamentList } from "./components/TournamentList"

export const Sidebar = () => {
    const margin = 12
    const width = 56

    return <Flex >
        <SportsList />
        <Flex direction="column"
        position="fixed"
        h={`calc(100% - ${margin*2}px)`}
        w="256px"
        left={`calc(${width}px + ${margin}px)`}
        margin="md"
        borderRadius="md"
        gap="lg">
            <TournamentList />
            <Favorites title="players">empty...</Favorites>
            <Favorites title="teams">empty...</Favorites>
        </Flex>
    </Flex>
}