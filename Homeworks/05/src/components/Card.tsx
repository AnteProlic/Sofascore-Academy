import { useEffect, useState } from "react"
import { Container, Flex } from "../../styled-system/jsx"
import { styled } from "../../styled-system/jsx"
import { pokemonType, Pokemon } from "../interface"
import { getPokemon, getSpecies } from "../routes"
import Type from "./components/Type"

const loading_url: string = "src/images/poke-ball_loading.gif"
const heart_url: string = "src/images/heart_white.png"

function output(num: number | undefined): string {
  return num && !isNaN(num) ? num.toString() : "";
}

let initial: Pokemon = {
  id: NaN,
  name: "",
  hp: NaN,
  height: NaN,
  weight: NaN,
  types: [],
  img_url: loading_url,
  front_url: loading_url,
  back_url: loading_url,
  details: ""
}

const fetchDescription = async (name:string): Promise<string> => {
  return fetch(getSpecies(name), {cache: "no-store"})
  .then(res => res.json())
  .then(species => {
    const description = species.flavor_text_entries[0].flavor_text
    .replace(/\f/g, '\n')
    .replace(/\u00ad\n/g, '')
    .replace(/\u00ad/g, '')
    .replace(/ -\n/g, ' - ')
    .replace(/-\n/g, '-')
    .replace(/\n/g, ' ');

    return description
  })
}

const fetchPokemon = async (name:string): Promise<Pokemon> => {
  const details = await fetchDescription(name)
  return fetch(getPokemon(name), {cache: "no-store"})
  .then(res => res.json())
  .then(pokemon => {
    const types: pokemonType[] = []

    pokemon.types.forEach((type: { slot: any; type: { name: any } }) => {
      types.push({
        slot: type.slot,
        type: type.type.name
      })
    })

    const p: Pokemon = {
      id: pokemon.id,
      name: pokemon.name,
      hp: pokemon.stats.find((stat: { stat: { name: string } }) => stat.stat.name === "hp").base_stat,
      height: pokemon.height,
      weight: pokemon.weight,
      types: types,
      img_url: pokemon.sprites.other["official-artwork"].front_default,
      front_url: pokemon.sprites.other.showdown.front_default,
      back_url: pokemon.sprites.other.showdown.back_default,
      details: details
    }

    return p
  })
}

function Card({ name, index }: { name: string; index: number}) {
  const [pokemon, setPokemon] = useState<Pokemon>(initial)

  const loadPokemon = async (): Promise<boolean> => {
    let count = 0
    while (count < 5) {
      try {
        const pokemon = await fetchPokemon(name)
        setPokemon(pokemon)
        return true
      } catch (err) {
        ++count
      }
    }
    throw new Error("Can't load pokemon...")
  }

  useEffect(() => {
    loadPokemon()
    .catch(err => {
      console.error(err)
    })
  }, [])

    return (
        <Flex direction={{base: "column-reverse", sm: index%2==0?"row-reverse":"row"}}>

            <Flex 
            background="background.image" 
            w={{ base: "100%", sm: "50%"}}  
            h={{ md: "s9", lg: "s11" }} 
            direction={index%2==0?"row":"row-reverse"} 
            alignItems="center"
            justifyContent={{base: "center", sm: "unset"}}>
              <styled.img 
              src={pokemon.img_url} 
              w={{ base: "s9", sm: "s7", md: "s8", lg: "s10" }} 
              h={{ base: "s9", sm: "s7", md: "s8", lg: "s10" }} 
              marginX={{ base: 0, sm: "2xl", md: "3xl", lg: "s1" }}/>
              <Flex
              position="absolute"
              alignSelf="baseline"
              w={{ base: "xl", sm: "xl", lg: "2xl" }} 
              h={{ base: "xl", sm: "xl", lg: "2xl" }}
              margin={{ base: "md", sm: "sm", lg: "lg" }}
              background="background.header"
              borderRadius="50%"
              justifyContent="center"
              alignItems="center">
                <styled.img 
                position="absolute"
                src={heart_url}
                h="80%"
                />
              </Flex>
            </Flex>


            <Flex 
            direction="column" 
            justifyContent="center" 
            w={{ base: "100%", sm: "50%"}}
            h={{ base: "s9", lg: "s11" }}
            padding={{ base: "2xl", md: "4xl", lg: "s1" }}>
              
              <Flex
              h={{ base: "3xl", lg: "60px" }}
              textStyle={{ base: "display.large", xs:"display.extraLarge", sm: "display.medium", md: "display.large", lg: "display.extraLarge" }} 
              textTransform="uppercase"
              alignItems="center">
                #{String(pokemon.id).padStart(4, '0')} {pokemon.name}
              </Flex>

              <Flex justifyContent="space-between">
                <Flex direction="column" 
                w={{base: "100%", sm: "s8"}} 
                paddingRight="2xl"
                h={{ sm: "s4", md: "s5", lg: "s6" }} 
                gap={{ base: "2xs", md: "xs", lg: "sm" }} 
                textStyle={{ xs: "body.large", sm: "body.small", md: "body.medium", lg: "body.large" }}>

                  <styled.span>
                    <styled.b>Health Points:</styled.b> {output(pokemon.hp)} HP
                  </styled.span>

                  <styled.span>
                    <styled.b>Height:</styled.b> {output(pokemon.hp)} cm
                  </styled.span>

                  <styled.span>
                    <styled.b>Weight:</styled.b> {output(pokemon.hp)} kg
                  </styled.span>

                  <Flex alignItems="center" h="fit">
                    <Flex h="100%" alignItems="center">
                      <Flex h="100%" 
                      alignItems="center"
                      >
                        <styled.b>Type:</styled.b>
                        </Flex>
                      </Flex>
                    <Flex gap="sm" paddingLeft="sm" h="100%" alignItems="center">
                      {pokemon.types.map(type => {
                        return <Type key={type.slot} type={type.type}/>
                      })}
                    </Flex>
                  </Flex>
                  <styled.span>
                    <styled.b>Details:</styled.b> {pokemon.details}
                  </styled.span>
                </Flex>
                <Flex direction="column" h="s6" gap="xl" display={{base: "none", sm: "flex"}}>
                  <styled.b textStyle={{ base: "display.micro", md: "display.small", lg: "display.medium" }}>Full view:</styled.b>
                  <Flex gap={{ base: "md", md: "lg", lg: "2xl" }} paddingRight={{ base: "3xl", md: "xl", lg: "2xl" }}>
                    <styled.img src={pokemon.front_url} w={{ base: "s1", md: "s2", lg: "s3" }} h={{ base: "s1", md: "s2", lg: "s3" }}/>
                    <styled.img src={pokemon.back_url} w={{ base: "s1", md: "s2", lg: "s3" }} h={{ base: "s1", md: "s2", lg: "s3" }}/>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
    )
}

export default Card