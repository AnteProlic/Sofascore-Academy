"use client"

import { AllTournamentsProvider, TournamentEventProvider, TournamentProvider, TournamentStandingsProvider } from "@/model/TournamentProvider"
import { Flex } from "../../../../../styled-system/jsx"
import { EventCard } from "@/components/EventCard"

export const StandingsList = ({id}: {id: number}) => {
  return (
    <div>
      <TournamentProvider id={Number(id)}>
        {tournament => (<div>{tournament.name}, {tournament.sport.name}, {tournament.country.name}</div>)}
      </TournamentProvider>
      <TournamentStandingsProvider id={id}>
        {(standings) => (
          <Flex direction="column">
            {standings.map(standing => (
              <Flex direction="column" key={standing.id}>
                ID: {standing.id}
                <Flex direction="column">
                  {standing.sortedStandingsRows.map(row => (
                    <div key={row.id}>{row.team.name}</div>
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
        )}
      </TournamentStandingsProvider>
    </div>
  )
}