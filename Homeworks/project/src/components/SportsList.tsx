"use client"

import { Flex, styled } from "../../styled-system/jsx"
import { SportProvider } from "@/model/SportProvider";
import { SportIcon } from "./components/components/SportIcon";
import Link from "next/link";

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
                <Link href="/"><Flex
                alignItems="center"
                h="4xl"
                paddingX="md"
                cursor={{ _hover: "pointer"}}
                direction="column"
                gap="xs">
                    <styled.img 
                    w="100%"
                    src={`/sports/sports.png`} />
                    <styled.span
                    textAlign="center"
                    color="text.default"
                    textStyle="body.small"
                    >All</styled.span>
                </Flex></Link>
                {sports.map(sport => (
                    <Link key={sport.id} href={`/sport/${sport.slug}`}>
                        <SportIcon sport={sport}/>
                    </Link>
                ))}
            </Flex>
        )}
    </SportProvider>
}
