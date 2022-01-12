import React from 'react'
import { useSuperHerosData, useAddSuperHeroData } from '../hooks/useSuperHerosData'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const RQSuperHeroPage = () => {
    const [name, setName] = useState('')
    const [alterEgo, setAlterEgo] = useState('')

    const onSuccess = (data) => {
        console.log('Perform side effect after data fetching', data)
    }

    const onError = (error) => {
        console.log('Perform side effect after encoutering error',error)
    }

    const handleAddHeroClick = () => {
        console.log("Handleclick", {name, alterEgo})
        const hero = {name, alterEgo }
        addHero(hero)
    }

    const { mutate : addHero, isLoading : addLoading, isError : addIsError, error : addErr} = useAddSuperHeroData()

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
            <button onClick={refetch}>fecth hero</button>
            <div>
                <input type='text' value={name} onChange={e => setName(e.target.value)} />
                <input type='text' value={alterEgo} onChange={e => setAlterEgo(e.target.value)} />
                <button onClick={handleAddHeroClick}>Add Hero</button>
            </div>
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
