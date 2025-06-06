import { Flex, styled } from "../../styled-system/jsx"
import { Search } from "./components/Search"

export const Navbar = () => {
    return <Flex 
    h="80px"
    position="fixed"
    bg="linear-gradient(black, rgba(255, 255, 255, 0))"
    w="100%"
    justifyContent="flex-end">
        <Flex 
        h="5xl"
        left="80px"
        marginTop="md"
        marginRight="md"
        bg="background.tertiary"
        w={`calc(100% - 92px)`}
        borderRadius="md"
        justifyContent="center">
            <Search />
        </Flex>
    </Flex>
}