import { useState } from "react"
import { Flex } from "../../../styled-system/jsx"
import { Sport } from "./components/Sport"

export const Dropdown = () => {
    const [dropdown, setDropdown] = useState(true)

    return <>
        <Flex
        w="100px" 
        p="sm"
        justifyContent="flex-start"
        onMouseOver={() => setDropdown(false)}
        onMouseOut={() => setDropdown(true)}
        cursor={{ _hover: "pointer"}}
        >
            SPORTS
        </Flex>
        <Flex 
            onMouseOver={() => setDropdown(false)}
            onMouseOut={() => setDropdown(true)}
            direction="column" 
            position="absolute" 
            top="4xl" 
            display={dropdown ? "none" : "flex"}
            bg="background.bg"
            borderRadius="xs"
            boxShadow="rgb(64, 64, 64) 0px 0px 30px 0px"
            >
                <Sport name="Football" />
                <Sport name="Basketball" />
                <Sport name="American football" />
        </Flex>
    </>
}