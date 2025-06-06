import { Flex, styled } from "../../../styled-system/jsx"

type FavoriteProps = {
    title: string
    children: React.ReactNode
}

export const Favorites = ({title, children}: FavoriteProps) => {

    return <Flex 
    direction="column"
    bg="background.primary"
    borderRadius="md"
    color="text.default"
    h="128px"
    >
        <styled.span
        w="100%"
        p="sm"
        textStyle="display.large"
        >Favorite {title}:</styled.span>
        <Flex direction="column" paddingX="md">
            {children}
        </Flex>
    </Flex>
}