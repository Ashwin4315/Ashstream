import { useState, useEffect } from 'react';


function useGetdetail(link) {
    const [detail, setdetail] = useState([]);

    useEffect(()=>{

        const getinfo =async () => {


            try {
    
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '57439d4706msh640c83a58183221p11da97jsn0e273c3e369e',
                        'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
                    }
                };
    
    
                const response = await fetch(`https://gogoanime2.p.rapidapi.com/anime-details/${link}`, options)
    
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }
    
                const data = await response.json();
    
                setdetail(data);
            } catch (error) {
            }
        }
        getinfo()
    },[link])
     return detail
}

export default useGetdetail;