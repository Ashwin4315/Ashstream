import {useEffect, useState } from "react";



function useGetanime(paging=1) {
    const [movies, setMovies] = useState([]);
    const [page, setpage] = useState(1);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(null);

    
    useEffect(()=>{

        const fetchanime =async() => {
            setloading(true);
            setError(null);
            setpage(paging)
    
            try {
                const options = {
                    method: 'GET',
                    headers: 
                    {
                        'X-RapidAPI-Key': '57439d4706msh640c83a58183221p11da97jsn0e273c3e369e',
                        'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
                    }
                }
    
                const response = await fetch(`https://gogoanime2.p.rapidapi.com/popular?page=${page}`, options);
    
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }
    
                const data = await response.json();

                setMovies(data);
                setloading(false)
            } 
            
            catch (error) {
                setError(error.message);          
                setloading(false);
            }
        }
        fetchanime()
    },[paging,page])

    return [movies,loading,error]
}


export default useGetanime;