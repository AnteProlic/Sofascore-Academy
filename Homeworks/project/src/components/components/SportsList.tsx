"use client"

import { Flex, styled } from "../../../styled-system/jsx"
import useSWR from "swr"
import { Sport, SportsResponse } from "../../model/interface"

export const SportsList = () => {
    const width = 56;
    const { data, isLoading, error } = useSWR<SportsResponse>("/api/sports")
    console.log(data)

    return <Flex 
            direction="column"
            bg="background.primary"
            position="fixed"
            h="calc(100% - 24px)"
            w={`${width}px`}
            margin="md"
            borderRadius="md">
                sports
            </Flex>
}
