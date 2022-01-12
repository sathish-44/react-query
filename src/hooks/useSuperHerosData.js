import { useQuery, useMutation, useQueryClient } from 'react-query'
import {request} from '../utils/axios.utils'

const fecthSuperHeros = () => {
    return request({ url : '/superheros'})
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

const addSuperHero = (hero) => {
    console.log('hero', hero)
    return request({ url : '/superheros', method : 'post', data: hero})
}

export const useAddSuperHeroData = () => {
    const queryClient = useQueryClient()
    return useMutation(addSuperHero, {
        // onSuccess : (data) => {
        //     // queryClient.invalidateQueries('super-heros')
        //     queryClient.setQueryData('super-heros', (oldQueryData) => {
        //         return {
        //             ...oldQueryData,
        //             data : [...oldQueryData.data, data.data]
        //         }
        //     })
        // }
        onMutate: async (newHero) => {
          await queryClient.cancelQueries('super-heros')
          const previousHero = queryClient.getQueryData('super-heros')
          queryClient.setQueryData('super-heros', (oldQueryData) => {
                    return {
                        ...oldQueryData,
                        data : [...oldQueryData.data, {id : oldQueryData?.data?.length + 1, ...newHero}]
                    }
                })
                return {
                    previousHero,
                }
        },
        onError: (_error, _hero, context) => {
            queryClient.setQueryData('super-heros', context.previousHero)
        },
        onSettled: () => {
            queryClient.invalidateQueries('super-heros')
        }
    })
}