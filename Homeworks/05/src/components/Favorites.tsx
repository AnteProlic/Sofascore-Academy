import Modal from 'react-modal';
import { Flex, Grid, styled } from '../../styled-system/jsx';
import FavoriteCard from './components/FavoriteCard';
import { Pokemon } from '../interface';
import { useEffect, useState } from 'react';

const arrowUrl: string = "src/images/left-arrow.png"

Modal.setAppElement("#root")

function Favorites({isOpen=false, onClose, pokemons=[], addFavorite, removeFavorite}: 
    {isOpen: boolean, onClose: () => void, pokemons: Pokemon[], addFavorite: Function, removeFavorite: Function}) {
    
    const [favs, setFavs] = useState<Pokemon[]>([])

    useEffect(() => {
        if(!isOpen) {
            setFavs(pokemons)
        }
    }, [pokemons, isOpen])

    return <Modal 
    isOpen={isOpen}
    onRequestClose={onClose}
    style={{
        overlay: {
            zIndex: "1",
            padding: "0",
            width: "100%",
            margin: "0",
            display: "flex"
        },
        content: {
            padding: "0",
            position: "absolute"
        }
        }}>
        <Flex direction="column" data-theme="dark">
            <Grid
            position="sticky"
            top="0"
            zIndex="1"
            w="100%"
            h={{ base: "3xl", lg: "s1" }}
            background="background.primary"
            textStyle={{ base: "display.small", sm: "display.medium" }}
            color="text.primary">
                <styled.img
                src={arrowUrl}
                alignSelf="center"
                position="absolute"
                left={{ base: "lg", lg: "xl" }}
                h={{ base: "xl", lg: "2xl" }}
                scale="fit"
                cursor={{_hover: "pointer"}}
                onClick={onClose}>
                </styled.img>

                <Flex
                justifySelf="center"
                alignSelf="center"
                position="absolute">
                    FAVORITES
                </Flex>

            </Grid>
            <Flex 
            flexWrap="wrap"
            w="100%"
            justifyContent={{ base: "center", sm: "flex-start" }}
            paddingTop={{ base: "sm", sm: "xs", md: "sm", lg: "md" }}
            paddingX={{ base: "md", sm: "sm", md: "sm", lg: "lg" }}
            >
                {favs.map(pokemon => {
                    return <FavoriteCard 
                    key={pokemon.name} 
                    pokemon={pokemon}
                    add={(e: Pokemon) => addFavorite(e)}
                    remove={(e: string) => removeFavorite(e)}/>
                })}
            </Flex>
        </Flex>
    </Modal>
}

export default Favorites