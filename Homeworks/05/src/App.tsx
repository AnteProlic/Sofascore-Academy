import { useEffect, useState } from "react"
import { Flex } from "../styled-system/jsx"
import { getPokemon } from "./routes"
import { Pokemon, pokemonType } from "./interface"
import { styled } from "../styled-system/jsx"
import Card from "./components/Card"


function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  const [count, setCount] = useState<number>(2)
  const [loading, setLoading] = useState<Boolean>(true)

  function addPokemon(pokemonId: number) {
    fetch(getPokemon(pokemonId))
      .then(res => res.json())
      .then(res => {
        let types: pokemonType[] = []

        res.types.forEach((type: { slot: any; type: { name: any } }) => {
          types.push({
            slot: type.slot,
            type: type.type.name
          })
        })

        let newPokemon: Pokemon = {
          id: res.id,
          name: res.name,
          hp: res.stats.find((stat: { stat: { name: string } }) => stat.stat.name === "hp").base_stat,
          height: res.height,
          weight: res.weight,
          types: types,
          img_url: res.sprites.other["official-artwork"].front_default,
          front_url: res.sprites.other.showdown.front_default,
          back_url: res.sprites.other.showdown.back_default
        }

        setPokemon(pokemon => [...pokemon, newPokemon])
      })
  }

  useEffect(() => {
    if (loading === true) {
      addPokemon(count-1)
      setLoading(false)
    }
    addPokemon(count)
  }, [count])

  return (
    <Flex direction="column">
      <Flex h="3xl" w="100%" background="background.header" position="sticky" top="0" justifyContent="space-between" alignItems="center" padding="45px 18px">
        <styled.img src={`../public/heart.png`} h="2xl" scale="fit" onClick={() => {
          setCount(count => count+1)
        }}/>
        <Flex color="text.header" textStyle="display.large" alignItems="center" h="2xl" w="206px">
          <styled.img src={`../public/poke-ball.png`} h="2xl" scale="fit"/>
          POKEDEX
        </Flex>
        <styled.img src={`../public/gear.png`} h="2xl" scale="fit"/>
      </Flex>
      <Flex direction="column">
        {pokemon.map((p: Pokemon) => {
          return <Card 
          key={p.id} 
          id={p.id} 
          name={p.name} 
          hp={p.hp} 
          height={p.height} 
          weight={p.weight} 
          types={p.types}
          img_url={p.img_url}
          front_url={p.front_url}
          back_url={p.back_url}
          />
        })}
      </Flex>
    </Flex>
  )
}

export default App
