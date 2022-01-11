import { useQuery, useInfiniteQuery } from "react-query";
import axios from "axios";

const fetchNumbers = ({pageParam = 1}) => {
    return axios.get(`http://localhost:4000/nums?_limit=2&_page=${pageParam}`)
}


export const InfiniteQueryPage = () => {
    const {isLoading, isError, error, data, hasNextPage, 
        fetchNextPage, isFetching, isFetchingNextPage} = useInfiniteQuery(['numbers'],fetchNumbers,
        {
            getNextPageParam : (_lastPage, pages) => {
                if(pages.length < 5){
                    return pages.length + 1
                } else {
                    return undefined
                }
            }
        }
     )

    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <div>
                {data?.pages.map((group, i) => {
                    return (
                        <div key={i}>
                           {
                               group.data.map(num => (
                                   <h4 key={num.id}>{num.id} - {num.label}</h4>
                               ))
                           }
                        </div>
                    )
                })}    
            </div> 
            <div>
                <button disabled={!hasNextPage} onClick={fetchNextPage}>Load More</button>
            </div>
            <div>
                {isFetching && !isFetchingNextPage ? 'Fetching' : null}
            </div>
        </>
    )
}

