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
        justifyContent="space-between"
        align="stretch">
            <Flex h="100%" w="256px" alignItems="center" marginX="md">
                <styled.span color="text.default" fontSize="24px">THIS-IS-APP-TITLE!</styled.span>
            </Flex>
            <Search />
            <Flex 
            h="100%" w="256px" 
            alignItems="center" justifyContent="flex-end" 
            marginX="md">
                <styled.img h="2xl" src="/settings.png" cursor={{_hover: "pointer"}}/>
            </Flex>
        </Flex>
    </Flex>
}