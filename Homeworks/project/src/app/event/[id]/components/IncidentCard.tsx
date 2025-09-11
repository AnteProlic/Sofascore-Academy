import { Card, CardTeamSide, Goal, GoalScoringTeam, Incident, IncidentType, Period } from "@/model/interface";
import { Flex, styled } from "../../../../../styled-system/jsx";
import { isCard, isGoal } from "@/model/functions";

export const IncidentCard = ({incident}: {incident: Incident}) => {  

    return <Flex
    bg="background.primary" 
    m="xs" p="xs" 
    borderRadius="md"
    w={("text" in incident)?"128px":"256px"}
    alignItems="center"
    color="text.default"
    alignSelf={
        ("teamSide" in incident) ? (((incident as Card).teamSide == "home") ? "flex-start": "flex-end"): 
        (("scoringTeam" in incident) ? (((incident as Goal).scoringTeam == "home") ? "flex-start": "flex-end"): "center")
    }>
        <Flex w="3xl" h="3xl" alignItems="center" justifyContent="center"
        bg="black"
        borderRadius="50%"
        overflow="hidden">
            <styled.img w="2xl" src={("color" in incident)?`/${String(incident.color)}.png`:`/${incident.type}.png`}/>
        </Flex>
        <Flex direction="column" paddingLeft="md">
            <styled.span>{("player" in incident) ? (incident as Card | Goal).player.name : (incident as Period).text}</styled.span>
            <styled.span>{incident.time}'</styled.span>
        </Flex>
    </Flex>
}