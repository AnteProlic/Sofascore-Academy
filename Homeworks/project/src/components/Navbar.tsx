import { useTheme } from "@/model/Context"
import { Flex, styled } from "../../styled-system/jsx"
import { Search } from "./components/Search"
import { useState } from "react"

export const Navbar = () => {
    const {theme, setTheme} = useTheme()
    const [displayOpts, setDiplayOpts] = useState<Boolean>(false)

    return <Flex 
    h="80px"
    position="fixed"
    w="100%"
    justifyContent="flex-end" >
        <Flex 
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"
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

                <styled.img 
                onClick={() => setDiplayOpts(!displayOpts)}
                h={{base: "min(8vw, 32px)", sm: "2xl"}} w="auto" aspectRatio="1/1"
                 src="/settings.png" cursor={{_hover: "pointer"}}/>

                <Flex 
                display={displayOpts?"flex":"none"}
                direction="column" position="fixed" bg="background.secondary"
                 w="fit-content" h="fit-content" top="76px"
                 p="md" borderRadius="md" color="text.default" gap="xs">
                    <Flex h="xl" p="xs" alignItems="center" gap="xs"
                    cursor={{_hover: "pointer"}} 
                    textDecoration={{_hover: "underline"}}
                    onClick={() => setTheme("base")}>
                        <styled.div bg="white" h="100%" w="auto" aspectRatio="1/1" borderRadius="50%"
                        border="solid 1px background.secondary"/>
                        <styled.span>BASE</styled.span>
                    </Flex>
                    <Flex h="xl" p="xs" alignItems="center" gap="xs"
                    cursor={{_hover: "pointer"}}
                    textDecoration={{_hover: "underline"}}
                    onClick={() => setTheme("dark")}>
                        <styled.div bg="black" h="100%" w="auto" aspectRatio="1/1" borderRadius="50%"
                        border="solid 1px background.secondary"/>
                        <styled.span>DARK</styled.span>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
}