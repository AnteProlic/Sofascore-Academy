export interface Sport {
    id: number
    name: string
    slug: string
}

export interface SportsResponse {
    results: Sport[]
}