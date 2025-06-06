"use client"
import { useEffect, useRef, useState } from 'react'
import { Flex, styled } from "../../../styled-system/jsx"
import { SearchPlayerProvider, SearchTeamProvider } from '@/model/SearchProvider'
import { SafeImage } from '../SafeImage'
import Link from 'next/link'

export const Search = () => {
    const [display, setDisplay] = useState<Boolean>(false)
    const [query, setQuery] = useState<string>("")
    const targetRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const timer = setTimeout(() => {
        }, 500)
        
        const handleClick = (e: MouseEvent) => {
        if (targetRef.current?.contains(e.target as Node)) {
            setDisplay(true)
        } else {
            setDisplay(false)
        }
        }

        document.addEventListener('click', handleClick)
        return () => {
            clearTimeout(timer)
            document.removeEventListener('click', handleClick)
        }
    }, [query])

    return <Flex direction="column" alignItems="center">
            <Flex
            alignItems="center"
            justifyContent="center"
            marginX="xl"
            h="5xl">

            <styled.img 
            src="/search.png"
            marginRight="-2xl"
            h="xl"
            cursor={{ _hover: "pointer"}}
            zIndex="1"/>
            
            <styled.input
            ref={targetRef}
            type="text"
            bg="background.secondary"
            borderRadius="sm"
            outline="none"
            paddingLeft="3xl"
            paddingY="sm"
            color="black"
            placeholder="Search for tournaments, clubs, players..."
            boxShadow="inset 0 0 10px #424242;"
            w="516px" 
            onChange={(e) => {setQuery(e.target.value)}}/>

            <styled.img 
            src="/calendar.png"
            marginLeft="-2xl"
            h="xl"
            cursor={{ _hover: "pointer"}}
            zIndex="1"/>
        </Flex>
        {display && (query.length >= 2) && (query.length <= 100) && <Flex 
        position="fixed" marginTop="50px" 
        borderRadius="md" direction="column"
        bg="background.bg" w="516px" maxHeight="80vh" overflow="scroll" overflowX="hidden" p="sm">
            <SearchPlayerProvider query={query}> 
                {players => (
                    <Flex direction="column" gap="xs">
                        {players.length > 0 && <styled.span w="100%" textAlign="center">Players</styled.span>}
                        {players.map(player => (
                            <Link key={player.id} href={`/player/${player.id}`}>
                                <Flex h="2xl" gap="sm" textDecoration={{_hover: "underline"}}>
                                    <Flex h="100%" w="auto" aspectRatio="1/1" 
                                    borderRadius="50%" overflow="clip"
                                    borderColor="background.primary"
                                    border="solid 1px">
                                        <SafeImage 
                                        src={`https://academy-backend.sofascore.dev/player/${player.id}/image`}
                                        placeholder="/user.png"
                                        alt={player.slug}/>
                                    </Flex>
                                    <styled.span>{player.name}</styled.span>
                                </Flex>
                            </Link>
                        ))}
                    </Flex>
                )}
            </SearchPlayerProvider>
            <SearchTeamProvider query={query}> 
                {teams => (
                    <Flex direction="column" gap="xs">
                        {teams.length > 0 && <styled.span w="100%" textAlign="center">Teams</styled.span>}
                        {teams.map(team => (
                            <Link key={team.id} href={`/player/${team.id}`}>
                                <Flex h="2xl" gap="sm" textDecoration={{_hover: "underline"}}>
                                    <Flex h="100%" w="auto" aspectRatio="1/1" 
                                    borderRadius="50%" overflow="clip"
                                    borderColor="background.primary"
                                    border="solid 1px">
                                        <SafeImage 
                                        src={`https://academy-backend.sofascore.dev/team/${team.id}/image`}
                                        placeholder="/user.png"
                                        alt={team.name}/>
                                    </Flex>
                                    <styled.span>{team.name}</styled.span>
                                </Flex>
                            </Link>
                        ))}
                    </Flex>
                )}
            </SearchTeamProvider>
        </Flex>
        }
    </Flex>
}