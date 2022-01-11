import { useQuery } from 'react-query'
import axios from 'axios'

const fecthCrickters = () => {
    return axios.get('http://localhost:4000/cricketers')
}

export const useCricketsData = (onSuccess, onError) => {
    return useQuery('cricketers',fecthCrickters,{
        // cacheTime: 5000, cache api data
        // staleTime: 5000,
        // refetchOnMount : true, refetch after every mount
        // refetchOnWindowFocus : true, get instant data change in UI
        // refetchInterval : 2000, refetch every 2 sec,
        // refetchIntervalInBackground : true,
        // enabled : false
       enabled : false, 
       onSuccess,
       onError})
}
