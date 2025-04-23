import { useState } from "react"
import { Flex, styled } from "../../../styled-system/jsx"
import { Pokemon } from "../../interface"

const emptyHeartUrl: string = "src/images/heart_red.png"
const redHeartUrl: string = "src/images/heart_red_filled.png"

function FavoriteCard({pokemon, add, remove}: {pokemon: Pokemon, add: Function, remove: Function}) {
    const [url, setUrl] = useState<string>(redHeartUrl)

    return <Flex 
    position="relative"
    direction="column"
    padding="sm"
    textStyle={{ base: "display.large", sm: "display.medium", md: "display.large" }} 
    color="text.default"
    w={{ base: "80%", sm: "33%", md: "25%", lg: "20%" }} 
    h={{ base: "80%", sm: "33%", md: "25%", lg: "20%" }} >
        <Flex 
        direction="column"
        bg="background.image"
        padding="md">
            <styled.img src={pokemon.img_url[1]} />
            #{String(pokemon.id).padStart(4, '0')} {pokemon.name}
            <Flex
            position="absolute"
            right={{ base: "sm", lg: "0" }} 
            top={{ base: "sm", lg: "0" }} 
            w="xl" 
            h="xl"
            margin={{ base: "md", sm: "sm", lg: "lg" }}
            cursor={{_hover: "pointer"}}
            style={{ backgroundImage: `url("${url}")` }}
            backgroundSize="cover"
            onClick={() => {
                pokemon.favorite = !pokemon.favorite
                if(pokemon.favorite) {
                    remove(pokemon.name)
                } else {
                    add(pokemon)
                }
                setUrl(pokemon.favorite ? emptyHeartUrl : redHeartUrl)
            }}>
        
            <Flex
            h="100%"
            w="100%"
            bgImage={{base: `url(${redHeartUrl})`}}
            opacity={{base: "0", _hover: "0.6"}}
            backgroundSize="cover"
            ></Flex>
        
            </Flex>
        </Flex>
    </Flex>
}

export default FavoriteCard