"use client"

import { AllTournamentsProvider, TournamentEventProvider, TournamentProvider, TournamentStandingsProvider } from "@/model/TournamentProvider"
import { Flex, styled } from "../../../../../styled-system/jsx"
import { EventCard } from "@/components/EventCard"
import { TeamStanding } from "./components/TeamStanding"
import { StandingsType } from "@/model/interface"
import { useState } from "react"
import { SafeImage } from "@/components/SafeImage"

export const StandingsList = ({id}: {id: number}) => {
  const [selectedType, setSelectedType] = useState<StandingsType>(StandingsType.total)

  return (
    <Flex w="100%">
      <TournamentProvider id={Number(id)}>
        {tournament => (<Flex 
        direction="column" w="50%" 
        h={`calc(100vh - ${80}px)`} 
        alignItems="center"
        justifyContent="center">
          <Flex h="320px" bg="white" borderRadius="50%" p="xl" border="solid 6px">
            <SafeImage 
              src={`https://academy-backend.sofascore.dev/tournament/${tournament.id}/image`}
              placeholder="/sports/sports.png"
              alt={`${tournament.slug}`}
            />
          </Flex>
          <Flex direction="column" alignItems="center">
            <styled.span fontSize="92px">{tournament.name}</styled.span>
            <styled.span fontSize="32px" 
            marginTop="-12px">{tournament.country.name}</styled.span>
          </Flex>
        </Flex>)}
      </TournamentProvider>
      <Flex w="50%" justifyContent="center">
        <TournamentStandingsProvider id={id}>
          {(standings) => (
            <Flex direction="column" w="600px" color="text.default" 
            p="md" alignItems="center" gap="sm" >
              <Flex bg="background.primary" overflow="clip"
              borderRadius="md">
                {Object.keys(StandingsType).map(type => (
                  <styled.span key={type}
                  textTransform="uppercase"
                  paddingX="md"
                  bg={{base: (type == selectedType)?"background.bg":"background.tertiary"}}
                  color={{base: (type == selectedType)?"background.tertiary":"background.bg"}}
                  textDecoration={{_hover: "underline"}}
                  cursor={{_hover: "pointer"}}
                  onClick={() => {setSelectedType(type as StandingsType)}}>{type}</styled.span>
                ))}
              </Flex>
              <Flex direction="column" w="100%" borderRadius="md" bg="background.tertiary">
                <Flex w="100%" h="2xl" 
                alignItems="center" paddingX="md" textAlign="center"
                borderBottom="solid 1px">
                  <styled.div w="25px">#</styled.div>
                  <styled.div w="330px" textAlign="left" paddingLeft="md">TEAM</styled.div>
                  <styled.div w="40px">P</styled.div>
                  <styled.div w="40px">W</styled.div>
                  <styled.div w="40px">D</styled.div>
                  <styled.div w="40px">L</styled.div>
                  <styled.div w="60px">DIFF</styled.div>
                  <styled.div w="80px">GOALS</styled.div>
                  <styled.div w="80px">P</styled.div>
                </Flex>
                <Flex direction="column" paddingY="xs">
                  {standings.find((element) => element.type == selectedType)?.sortedStandingsRows.map((row, index) => 
                    <TeamStanding key={row.id} index={index+1} row={row}/>
                  )}
                </Flex>
              </Flex>
            </Flex>
          )}
        </TournamentStandingsProvider>
      </Flex>
    </Flex>
  )
}