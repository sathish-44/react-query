import { useQuery } from 'react-query'
import axios from 'axios'

const fecthSuperHeros = () => {
    return axios.get('http://localhost:4000/superheros')
}

export const useSuperHerosData = (onSuccess,onError ) => {
    return useQuery('super-heros',fecthSuperHeros, 
    {
        onSuccess,
        onError,
        // select: (data) => {
        //     const superHeroNames = data.data.map((hero)=> hero.name)
        //     return superHeroNames
        // }
    }
    )
}