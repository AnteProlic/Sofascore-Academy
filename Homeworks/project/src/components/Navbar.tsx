import { Flex, styled } from "../../styled-system/jsx"
import { Search } from "./components/Search"

export const Navbar = () => {
    return <Flex 
    h="80px"
    position="fixed"
    w="100%"
    justifyContent="flex-end">
        <Flex 
        h="5xl"
        left={{base: "0px", sm: "80px"}}
        marginTop={{base: "0", sm: "md"}}
        marginRight={{base: "0", sm: "md"}}
        bg="background.tertiary"
        w={{base: "100%", sm: `calc(100% - 92px)`}}
        borderRadius={{base: "0", sm: "md"}}
        justifyContent="space-between"
        align="stretch">
            <Flex h="100%" w="256px" alignItems="center" marginX="md">
                <styled.span color="text.default" fontSize="24px"></styled.span>
            </Flex>
            <Search />
            <Flex 
            h="100%" w="256px" 
            alignItems="center" justifyContent="flex-end" 
            marginX="md">
                <styled.img h={{base: "min(8vw, 32px)", sm: "2xl"}} w="auto" aspectRatio="1/1" src="/settings.png" cursor={{_hover: "pointer"}}/>
            </Flex>
        </Flex>
    </Flex>
}