"use client"

import { Flex, styled } from "../../../styled-system/jsx"
import { SportProvider } from "@/model/SportProvider";
import { SportIcon } from "./components/Sport";

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
                {sports.map(sport => (
                    <SportIcon key={sport.id} slug={sport.slug}/>
                ))}
            </Flex>
        )}
    </SportProvider>
}
