import React from 'react'
import { useCricketsData } from '../hooks/useCricketersData'

export const RQCricketersPage = () => {
    const onSuccess = (data) => {
        console.log('Success', data)
    }
    const onError = (error) => {
        console.log('Error', error)
    }

    const { isLoading, data, isError, error, isFetching, refetch} = useCricketsData(onSuccess,onError)
    console.log({isLoading, isFetching})
    if(isLoading || isFetching){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <h4>RQ Cricketers Page</h4>
            <button onClick={refetch}>Fetch Players</button>
            {data?.data.map((player)=>{
                return <h4 key={player.id}>{player.name} - {player.alterName}</h4>
            })}
        </div>
    )
}
