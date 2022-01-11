import React from 'react'
import { useSuperHerosData } from '../hooks/useSuperHerosData'
import { Link } from 'react-router-dom'

export const RQSuperHeroPage = () => {

    const onSuccess = (data) => {
        console.log('Perform side effect after data fetching', data)
    }

    const onError = (error) => {
        console.log('Perform side effect after encoutering error',error)
    }

    const { isLoading, data, isError, error, isFetching, refetch} = useSuperHerosData(onSuccess,onError)

    console.log({isLoading, isFetching})
    if(isLoading || isFetching){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    return (
        <div>
            <h2>RQ Super Page</h2>
            {/* <button onClick={refetch}>fecth hero</button> */}
            {
                data?.data.map(hero =>{
                    return <div key={hero.id}><Link to={`/rq-super-heroes/${hero.id}`}> {hero.name} </Link> </div>
                })
            }
            {/* {
                data.map((superHeroNames) => {
                    return <p key={superHeroNames}>{superHeroNames}</p>
                })
            } */}
        </div>
    )
}
