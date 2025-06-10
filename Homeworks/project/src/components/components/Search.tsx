"use client"
import { useEffect, useRef, useState } from 'react'
import { Flex, styled } from "../../../styled-system/jsx"
import { SearchPlayerProvider, SearchTeamProvider } from '@/model/SearchProvider'
import { SafeImage } from '../SafeImage'
import Link from 'next/link'
import { getPlayerImage, getTeamImage } from '@/api/routes'
import { DateInput } from './components/DateInput'

export const Search = () => {
    const [displaySearch, setDisplaySearch] = useState<Boolean>(false)
    const [displayDate, setDisplayDate] = useState<Boolean>(false)

    const [query, setQuery] = useState<string>("")
    const searchRef = useRef<HTMLInputElement>(null)
    const dateRef = useRef<HTMLImageElement>(null)

    const searchResultRef = useRef<HTMLDivElement>(null)
    const datePopupRef = useRef<HTMLDivElement>(null)

    const handleClick = (e: MouseEvent) => {
        if (searchRef.current?.contains(e.target as Node)) {
            setDisplaySearch(true)
        } else if (searchResultRef.current?.contains(e.target as Node)) {}
        else {
            setDisplaySearch(false)
        }

        if (dateRef.current?.contains(e.target as Node)) {
            setDisplayDate(true)
        } else if (datePopupRef.current?.contains(e.target as Node)) {} 
        else {
            setDisplayDate(false)
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
        }, 500)

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
            ref={searchRef}
            type="text"
            bg="background.search"
            borderRadius="sm"
            outline="none"
            paddingLeft="3xl"
            paddingY="sm"
            color="black"
            placeholder="Search for tournaments, clubs, players..."
            boxShadow="inset 0 0 10px #424242;"
            w={{base: "70vw", sm:"516px" }}
            onChange={(e) => {setQuery(e.target.value)}}/>
            
            <styled.img 
            ref={dateRef}
            src="/calendar.png"
            marginLeft="-2xl"
            h="xl"
            cursor={{ _hover: "pointer"}}
            zIndex="1"
            onClick={() => displayDate?setDisplayDate(false):setDisplayDate(true)}/>
        </Flex>

        {displaySearch && (query.length >= 2) && (query.length <= 100) && <Flex 
        ref={searchResultRef}
        position="fixed" marginTop="50px" 
        borderRadius="md" direction="column"
        bg="background.secondary" w={{base: "90vw", sm:"516px" }} maxHeight="80vh" 
        scrollbar="hidden" color="text.default"
        overflow="scroll" overflowX="hidden" p="sm">
            <SearchPlayerProvider query={query}> 
                {players => (
                    <Flex direction="column" gap="xs">
                        {players.length > 0 && <styled.span w="100%" textAlign="center">Players</styled.span>}
                        {players.map(player => (
                            <Link key={player.id} href={`/player/${player.id}`}>
                                <Flex bg="background.tertiary" borderRadius="sm" p="xs" h="3xl" gap="sm" textDecoration={{_hover: "underline"}}>
                                    <Flex h="100%" w="auto" aspectRatio="1/1" 
                                    borderRadius="50%" overflow="clip"
                                    borderColor="background.primary"
                                    border="solid 1px"
                                    bg="background.img">
                                        <SafeImage 
                                        src={getPlayerImage(player.id)}
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
                                <Flex bg="background.tertiary" borderRadius="sm" p="xs" h="3xl" gap="sm" textDecoration={{_hover: "underline"}}>
                                    <Flex h="100%" w="auto" aspectRatio="1/1" 
                                    borderRadius="50%" overflow="clip"
                                    borderColor="background.primary"
                                    border="solid 1px"
                                    bg="background.img">
                                        <SafeImage 
                                        src={getTeamImage(team.id)}
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

        {displayDate && <Flex ref={datePopupRef} position="fixed" marginTop="50px"
        bg="background.tertiary" w="fit-content" h="3xl" p="sm" marginLeft="360px" borderRadius="sm">
            <DateInput />
        </Flex>}
        
    </Flex>
}