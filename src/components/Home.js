import styles from "./Home.module.css";
import Flex from "./Flex";
import MoviesList from "./MovieList";
import { useState } from "react";
import Loader from "./Loader";
import Trend from "./Trend";
import useGetanime from "../hooks/useGetanime";

function Home() {
    const [movies,isLoading,error] =useGetanime()
    const [page, setpage] = useState(2);
    const [newmovies, setnewMovies] = useState([]);


    let content 
    let content2 

    if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
        content2 = <Flex info={movies} />
    }

    if (error) {
        content = <p>{error}</p>;
        content2 = <p>{error}</p>;
    }

    if (isLoading) {
        content = <Loader/>;
        content2 = <Loader/>;
    }

    const loadmore = async () => {
        setpage(page + 1)
        try {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '57439d4706msh640c83a58183221p11da97jsn0e273c3e369e',
                    'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
                }
            }
            const response = await fetch(`https://gogoanime2.p.rapidapi.com/popular?page=${page}`, options);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();
            setnewMovies(data);

        } catch (error) {
        }

    }


    let newmo = <p>Found no movies.</p>;
    if (movies.length > 0) {
        newmo = <MoviesList movies={newmovies} />;
    }



    return (
        <><section>
            {content2}
        </section>
            <div className={styles.container}>
                <div className={styles.left}>

                <div className={styles.con}>
                    <section className={styles.sec}><h2>Popular</h2>{content}{newmo}</section>
                    <div className={styles.button}>
                        <button onClick={loadmore} className={styles.btn}>Loadmore</button></div>
                </div></div>
                <div className={styles.right}>
                    <h1>Trending</h1>
                    <Trend />
                </div>
            </div></>
    );
}

export default Home;



