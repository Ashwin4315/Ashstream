import styles from "./News.module.css"
import { useState, useEffect,useCallback} from 'react';


function News() {
    const [news, setnews] = useState([]);
    const fetchMoviesHandler = useCallback(async () => {
       

        try {
          
            const response=await fetch("https://api.jikan.moe/v4/top/anime")
               
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            const info= await data.data;
            console.log(info)


            setnews(info);
        } catch (error) {
        }
    }, []);

    useEffect(() => {
        console.log("heloo")
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);
    

    return (
        <div className={styles.container}>
         
         {news.map((top)=>{
            return(
                <div key={top.animeId} className={styles.box}>
                    <img src={top.images.jpg.image_url} className={styles.image}/>
                    <section className={styles.text}>
                    <h3>{top.title}</h3>
                    <p>Score:{top.score}</p>
                    <p>episodes{top.episodes}</p></section>
                </div>
            )

         })}

        </div>
      );
}

export default News;