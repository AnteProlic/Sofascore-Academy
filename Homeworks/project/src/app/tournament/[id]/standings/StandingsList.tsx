"use client"

import { TournamentProvider, TournamentStandingsProvider } from "@/model/TournamentProvider"
import { Flex, styled } from "../../../../../styled-system/jsx"
import { TeamStanding } from "./components/TeamStanding"
import { StandingsType } from "@/model/interface"
import { useState } from "react"
import { SafeImage } from "@/components/SafeImage"
import { getTournamentImage } from "@/api/routes"

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
          <Flex h="320px" w="auto" aspectRatio="1/1" bg="white" borderRadius="50%" p="xl" border="solid 6px">
            <SafeImage 
              src={getTournamentImage(tournament.id)}
              placeholder="/loading.gif"
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
            <Flex direction="column" w="fit-content" color="text.default" 
            p="md" alignItems="center" gap="sm" >
              <Flex overflow="clip"
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
                  <styled.span w="25px" textAlign="center">#</styled.span>
                  <styled.span w="256px" textAlign="left" paddingLeft="md">TEAM</styled.span>
                  <styled.span w="32px" >P</styled.span>
                  <styled.span w="32px" >W</styled.span>
                  <styled.span w="32px" >D</styled.span>
                  <styled.span w="32px" >L</styled.span>
                  <styled.span w="64px" >DIFF</styled.span>
                  <styled.span w="128px">SCORE</styled.span>
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