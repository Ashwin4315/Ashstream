import { useState, useEffect} from 'react';


function useJiken() {
  
    const [Trend, setTrend] = useState([]);
    useEffect(()=>{ const fetchanime =async () => {
       

        try {
          
            const response=await fetch("https://api.jikan.moe/v4/top/anime")
               
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            const info= await data.data;


            setTrend(info);
        } catch (error) {
        }
    }
      fetchanime()  
},[])
    return Trend
   
}


export default useJiken;