"use client"

import { Flex, styled } from "../../styled-system/jsx"
import { SportProvider } from "@/model/SportProvider";
import { SportIcon } from "./components/components/SportIcon";

export const SportsList = () => {
    const width = 56;

    return <SportProvider>
        {sports => (
            <Flex 
            direction="column"
            bg="background.primary"
            position="fixed"
            h="calc(100% - 24px)"
            w={`${width}px`}
            margin="md"
            borderRadius="md"
            paddingY="sm"
            gap="lg">
                <Flex
                alignItems="center"
                h="4xl"
                paddingX="md"
                cursor={{ _hover: "pointer"}}
                direction="column"
                gap="xs"
                >
                    <styled.img 
                    w="100%"
                    src={`/sports/sports.png`} />
                    <styled.span
                    textAlign="center"
                    color="text.default"
                    textStyle="body.small"
                    >All</styled.span>
                </Flex>
                {sports.map(sport => (
                    <SportIcon key={sport.id} slug={sport.slug}/>
                ))}
            </Flex>
        )}
    </SportProvider>
}
