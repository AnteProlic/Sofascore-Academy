"use client"

import { Flex, styled } from "../../styled-system/jsx"
import { SportProvider } from "@/model/SportProvider";
import { SportIcon } from "./components/components/SportIcon";
import Link from "next/link";
import { SafeImage } from "./SafeImage";

export const SportsList = () => {

    return <SportProvider>
        {sports => (
            <Flex 
            boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"
            direction={{base: "row", sm: "column"}}
            bg="background.primary"
            position="fixed"
            h={{base: "fit-content", sm: "calc(100% - 24px)"}}
            w={{base: "100%", sm: "56px"}}
            margin={{base: "0", sm: "md"}}
            top={{base: "56px", sm: "0"}}
            borderRadius={{base: "0", sm: "md"}}
            paddingY="sm"
            gap={{base: "0", sm: "lg"}}>
                <Link href="/"><Flex
                alignItems="center"
                w={{base: "4xl", sm: "100%"}}
                paddingX="md"
                cursor={{ _hover: "pointer"}}
                color="text.default"
                textDecoration={{_hover: "underline"}}
                direction="column"
                gap="xs">
                    <styled.div w={{base: "2xl", sm: "100%"}}>
                        <SafeImage src="/sports/sports.png" alt="all" />
                    </styled.div>
                    <Flex
                    display={{base: "none", sm: "flex"}}
                    textAlign="center"
                    textStyle="body.small"
                    >All</Flex>
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
