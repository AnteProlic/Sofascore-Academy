import { Flex, styled } from "../../../styled-system/jsx"

export const Options = () => {

    return <Flex 
        w="100px"
        p="sm"
        alignItems="center"
        justifyContent="flex-end"
        gap="lg">
        <styled.img 
        src="/question.png"
        w="xl"
        cursor={{ _hover: "pointer"}}/>
        <styled.img 
        src="/star.png"
        w="xl"
        cursor={{ _hover: "pointer"}}/>
        <styled.img 
        src="/settings.png"
        w="xl"
        cursor={{ _hover: "pointer"}}/>
    </Flex>
}