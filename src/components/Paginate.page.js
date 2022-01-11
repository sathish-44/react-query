import { useQuery } from "react-query";
import { useState } from "react";
import axios from "axios";

const fetchNumbers = (pageNum) => {
    return axios.get(`http://localhost:4000/nums?_limit=2&_page=${pageNum}`)
}

const calculateLength = () => {
    return axios.get(`http://localhost:4000/nums`)
}

export const PaginatePage = () => {
    const [pageNum, setPageNum] = useState(1)
    const {isLoading, isError, error, data} = useQuery(['numbers', pageNum],
     () => fetchNumbers(pageNum),
     {keepPreviousData : true}
     )
     const { data : totalLen} = useQuery('number-length',calculateLength)
    let lengthOfNum = totalLen?.data.length
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <div>
                {data?.data.map((num) => {
                    return (
                        <div key={num.id}>
                            <h4>{num.id} - {num.label}</h4>
                        </div>
                    )
                })}    
            </div> 
            <div>
                {console.log("lengthOfNum",lengthOfNum)}
                <button onClick={()=> setPageNum((page) => page - 1)} disabled={pageNum === 1}>Prev</button>
                <button onClick={()=> setPageNum((page) => page + 1)} disabled={pageNum === 5}>Next</button>
            </div>
        </>
    )
}

