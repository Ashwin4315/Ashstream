import {useEffect, useState } from "react";

function useSearch(search,pagging=1) {
    const [anime, setanime] = useState([]);
    const [page, setpage] = useState(1);
    const [searchs, setsearchs] = useState(1);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(null);

    
    useEffect(()=>{

        const fetchanime =async() => {
            setloading(true);
            setError(null);
            setpage(paging)
            setsearchs(search)
    
            try {
                const options = {
                    method: 'GET',
                    headers: 
                    {
                        'X-RapidAPI-Key': '57439d4706msh640c83a58183221p11da97jsn0e273c3e369e',
                        'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
                    }
                }

                const response = await  fetch(`https://gogoanime2.p.rapidapi.com/search?keyw=${searchs}&page=${page}`, options)
    
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }
    
                const data = await response.json();

                setanime(data);
                setloading(false)
            } 
            
            catch (error) {
                setError(error.message);          
                setloading(false);
            }
        }
        fetchanime()
    },[paging,page,search,searchs])

    return [anime,loading,error]
}


export default useSearch;