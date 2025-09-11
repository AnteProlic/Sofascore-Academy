import { useState } from "react"
import { Flex, styled } from "../../../../styled-system/jsx"
import { useDate, useTheme } from "@/model/Context"

export const DateInput = () => {
    const [value, setValue] = useState("")
    const {date, setDate} = useDate()
    const {theme, setTheme} = useTheme()

    return <Flex gap="xs" alignItems="center">
            <Flex direction="column" color="text.title">
                <styled.input p="xs" colorScheme={theme=="dark"?"dark":{}} type="date" bg="background.bg" borderRadius="xs" w="128px"
                onChange={(e) => setValue(e.target.value)}/>
            </Flex>
        <Flex h="100%" w="auto" aspectRatio="1/1" 
        textStyle="display.large"
        alignItems="center" justifyContent="center" borderRadius="50%"
        cursor={{_hover: "pointer"}}
        color={"text.default"}
        bg={(value == "")?{base: "background.bg"}:{base: "background.bg", _hover: "background.primary"}}
        opacity={(value == "")?0.5:1}
        onClick={() => setDate(value)}
        >
        ✓
        </Flex>
    </Flex>
}