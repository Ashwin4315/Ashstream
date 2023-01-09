import { useState, useEffect } from 'react';


function useGetstream(link,no) {
    const [stream, setstream] = useState([]);

    useEffect(()=>{
 const fetchanime =async () => {


        try {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '57439d4706msh640c83a58183221p11da97jsn0e273c3e369e',
                    'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
                }
            };


            const response = await fetch(`https://gogoanime2.p.rapidapi.com/vidcdn/watch/${link}-episode-${no}`, options)

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            const info = data.Referer

            setstream(info);
        } catch (error) {
        }
    }
    fetchanime()
    }, [link, no])
           return stream
    }


export default useGetstream;