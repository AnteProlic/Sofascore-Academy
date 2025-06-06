"use client"

import { AllTournamentsProvider } from "@/model/TournamentProvider"
import { Flex, styled } from "../../../styled-system/jsx"
import { TournamentElement } from "./components/TournamentElement";
import Link from "next/link";

export const TournamentList = ({sport}: {sport: string}) => {

    return <Flex 
    direction="column"
    bg="background.primary"
    borderRadius="md"
    color="text.default"
    h="256px"
    >
        <styled.span
        w="100%"
        p="sm"
        textStyle="display.large"
        >Tournaments:</styled.span>
        <AllTournamentsProvider slug={sport}>
            {tournaments => (
                <Flex
                direction="column">
                    {tournaments.map(tournament => (
                        <Link href={`/tournament/${tournament.id}`} key={tournament.id}>
                            <TournamentElement tournament={tournament} />
                        </Link>
                    ))}
                </Flex>
            )}
        </AllTournamentsProvider>
    </Flex>
}