import { Flex, styled } from "../../styled-system/jsx"
import { Search } from "./components/Search"

export const Navbar = () => {
    return <Flex
    position="sticky"
    bg="background.tertiary"
    w="100%"
    borderRadius="md"
    h="5xl"
    >
        <Search />
    </Flex>
}