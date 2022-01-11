import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'


const fetchSuperHeros = () => {
    return axios.get(`http://localhost:4000/superheros`)
}

const fetchCricketers = () => {
    return axios.get(`http://localhost:4000/cricketers`)
}


export const ParallelQueryPage = () => {
    const {data: superHeros} = useQuery('super-heros', fetchSuperHeros)
    const {data: cricketers} = useQuery('cricketers', fetchCricketers)
    return (
        <div>
            ParallelQueryPage
        </div>
    )
}
