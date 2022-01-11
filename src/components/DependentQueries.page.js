import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchTechnology = (desgId) => {
    return axios.get(`http://localhost:4000/designation/${desgId}`)
}

export const DependentQueriesPage = ({email}) => {
   const {data : user} = useQuery(['user', email], () => fetchUserByEmail(email))
   const desgId = user?.data.desgId
   const {data : tech} = useQuery(['tech',desgId], () => fetchTechnology(desgId),{
       enabled : !!desgId,
   })
    return (
        <div>
            DependentQueriesPage
            <h4>{user?.data.desgId}</h4>
            {tech?.data.technology.map(tec=><li key={tec}>{tec}</li>)}
        </div>
    )
}
