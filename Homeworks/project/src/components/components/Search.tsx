import { Flex, styled } from "../../../styled-system/jsx"

export const Search = () => {

    return <Flex
    alignItems="center"
    justifyContent="center"
    marginX="xl"
    h="5xl">

        <styled.img 
        src="/search.png"
        marginRight="-2xl"
        h="xl"
        cursor={{ _hover: "pointer"}}
        zIndex="1"/>
        
        <styled.input
        type="text"
        bg="background.secondary"
        borderRadius="sm"
        outline="none"
        paddingLeft="3xl"
        paddingY="sm"
        color="black"
        placeholder="Search for tournaments, clubs, players..."
        boxShadow="inset 0 0 10px #424242;"
        w="516px" />

        <styled.img 
        src="/calendar.png"
        marginLeft="-2xl"
        h="xl"
        cursor={{ _hover: "pointer"}}
        zIndex="1"/>

    </Flex>
}