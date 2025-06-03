"use client"

import { Flex, styled } from "../../../styled-system/jsx"
import { SportProvider } from "@/model/SportProvider";
import { SportIcon } from "./components/Sport";

export const SportsList = () => {
    const width = 56;
<<<<<<< HEAD
=======
    const { data, isLoading, error } = useSWR<SportsResponse>("/api/sports")
    console.log(data)
>>>>>>> fc0b86879e2f048dfad0d9ee9b53e4b3a3336a70

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
<<<<<<< HEAD
        )}
    </SportProvider>
}
=======
}
>>>>>>> fc0b86879e2f048dfad0d9ee9b53e4b3a3336a70
