import { useEffect, useState } from "react"
import { Flex } from "../styled-system/jsx"
import { styled } from "../styled-system/jsx"
import PokemonCard from "./components/PokemonCard"
import { getMultiple, getPokemon } from "./routes"
import Favorites from "./components/Favorites"
import { Pokemon } from "./interface"

const FIRST_N: number = 4

function App() {
  const [pokemons, setPokemons] = useState<string[]>([])
  const [favorites, setFavorites] = useState<Pokemon[]>([])
  const [count, setCount] = useState<number>(FIRST_N)
  const [loading, setLoading] = useState<boolean>(true)
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (loading === true) {
      fetch(getMultiple(FIRST_N), {cache: "no-store"})
      .then(res => res.json())
      .then(res => {
        res.results.forEach((pokemon: { name: string }) => {
          setPokemons(pokemons => [...pokemons, pokemon.name])
        })
      })
      setLoading(false)
    } else {
      fetch(getPokemon(count), {cache: "no-store"})
      .then(res => res.json())
      .then(res => {
        setPokemons(pokemons => [...pokemons, res.name])
      })
      .catch(err => {
        console.error(err)
      })
    }

    const onScroll = () => {
      if (document.body.scrollHeight - 200 <= window.scrollY + window.innerHeight) {
        setCount(count => count + 1)
      }
    }
      
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [count])


  return (
    <Flex direction="column" fontFamily="'Poppins', sans-serif" >
      <Favorites 
      isOpen={open}
      onClose={() => setOpen(false)}
      pokemons={favorites}
      addFavorite={(e: Pokemon) => setFavorites(favorites => [...favorites, e])} 
      removeFavorite={(e: string) => setFavorites(favorites => favorites.filter(fav => fav.name !== e))} 
      ></Favorites>
      <Flex 
      h={{ base: "3xl", lg: "s1" }}
      w="100%"
      background="background.primary" 
      position="sticky" 
      top="0" 
      justifyContent="space-between" 
      alignItems="center"
      zIndex="1"
      paddingX={{ base: "sm", sm: "xl"}}
      paddingY={{ base: "sm", sm: "xl"}}>
        <styled.img src={`src/images/heart.png`} 
        h={{ base: "lg", sm: "xl"}} 
        scale="fit" 
        cursor={{_hover: "pointer"}}
        animationDirection="alternate"
        animation={{_hover: "grow 0.6s infinite"}}
        onClick={() => setOpen(true)}
        />
        <Flex 
        color="text.primary" 
        textStyle={{ base: "display.small", sm: "display.medium" }} 
        justifyContent="center" alignItems="center" 
        h={{ base: "lg", sm: "xl" }}>
          <styled.img src={`src/images/poke-ball.png`} h={{ base: "lg", sm: "xl" }} scale="fit"/>
          POKEDEX
        </Flex>
        <styled.img src={`src/images/gear.png`} 
        h={{ base: "lg", sm: "xl" }} 
        scale="fit"
        animation={{_hover: "spin 2s linear infinite"}}
        cursor={{_hover: "pointer"}}
        />
      </Flex>
      <Flex direction="column">
        {pokemons.map((name: string, index: number) => {
          return <PokemonCard key={name} name={name} index={index} 
          addFavorite={(e: Pokemon) => setFavorites(favorites => [...favorites, e])} 
          removeFavorite={(e: string) => setFavorites(favorites => favorites.filter(fav => fav.name !== e))} 
          />
        })}
      </Flex>
    </Flex>
  )
}

export default App
