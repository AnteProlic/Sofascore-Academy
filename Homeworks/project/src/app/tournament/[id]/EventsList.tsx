"use client"

import { AllTournamentsProvider, TournamentEventProvider, TournamentProvider } from "@/model/TournamentProvider"
import { Flex, styled } from "../../../../styled-system/jsx"
import { EventCard } from "@/components/EventCard"
import { getTournamentImage } from "@/api/routes"
import { SafeImage } from "@/components/SafeImage"
import Link from "next/link"
import { useTheme } from "@/model/Context"

export const EventsList = ({id, span, page}: {id: number, span: "last"|"next", page: number}) => {

  return (
    <Flex
    direction="column" gap="sm" bg="background.tertiary" p="md" color="text.default" borderRadius="md">
      <TournamentProvider id={Number(id)}>
        {tournament => (<Flex alignItems="center" justifyContent="space-between" paddingX="xs">
            <Flex gap="sm">
              <styled.div h="2xl" bg="background.img" borderRadius="50%">
                <SafeImage src={getTournamentImage(tournament.id)} placeholder="/sports-dark/sports.png" alt={tournament.slug} />
              </styled.div>
              <Flex alignItems="flex-end" gap="sm">
                <styled.span textStyle="display.extraLarge">{tournament.name}</styled.span>
              </Flex>
            </Flex>
            <styled.span textDecoration={{_hover: "underline"}}>
                <Link href={`/tournament/${tournament.id}/standings`}>
                  STANDINGS
                </Link>
            </styled.span>
          </Flex>)}
      </TournamentProvider>
      <TournamentEventProvider id={id} span={span} page={page}>
        {(events) => (
          <Flex direction="column" gap="xs">
            {events.map(event => (
              <EventCard key={event.id} event={event}/>
            ))}
          </Flex>
        )}
      </TournamentEventProvider>
    </Flex>
  )
}