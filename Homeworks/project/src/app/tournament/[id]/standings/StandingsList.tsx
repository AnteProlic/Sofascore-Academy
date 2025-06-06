"use client"

import { AllTournamentsProvider, TournamentEventProvider, TournamentProvider, TournamentStandingsProvider } from "@/model/TournamentProvider"
import { Flex } from "../../../../../styled-system/jsx"
import { EventCard } from "@/components/EventCard"
import { TeamStanding } from "./components/TeamStanding"

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
                  {standing.sortedStandingsRows.map((row, index)=> (
                    <TeamStanding key={row.id} index={index+1} row={row} />
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