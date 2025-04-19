export interface pokemonType {
    slot: number
    type: string
}

export interface Pokemon {
    id: number
    name: string
    hp: number
    height: number
    weight: number
    types: pokemonType[]
    img_url: string
    front_url: string
    back_url: string
    details: string
}