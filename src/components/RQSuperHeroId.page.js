import React from 'react'
import { useSuperHeroById } from '../hooks/useSuperHeroById'
import { useParams } from 'react-router-dom'

export const RQSuperHeroIdPage = () => {
    const { heroId } = useParams()
    const { isLoading, data, isError, error, isFetching } = useSuperHeroById(heroId)
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    return (
        <div>
            Super Hero
            {data?.data.name} - {data?.data.alterEgo}
        </div>
    )
}
