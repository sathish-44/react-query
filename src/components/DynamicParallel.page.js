import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheros/${heroId}`)
}

export const DynamicParallelPage = ({heroId}) => {
    const queryResult = useQueries(
        heroId.map(id => {
            return {
                queryKey : ['super-hero', id],
                queryFn : () => fetchSuperHero(id)
            }
        })
    )
    console.log(queryResult)
    return <div>DynamicParallelPage
        {queryResult?.map((d)=><li>{d.data?.data.name}</li>)}
        {/* {
            queryResult?.data.data.map((hero)=> <li key={hero.id}>{hero.name}</li>)
        } */}
    </div>
}