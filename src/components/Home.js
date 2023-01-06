import styles from "./Home.module.css";
import Flex from "./Flex";
import MoviesList from "./MovieList";
import { useCallback, useEffect, useState } from "react";
import Loader from "./Loader";
import News from "./News";

function Home() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setpage] = useState(2);
    const [newmovies, setnewMovies] = useState([]);



    const fetchanime = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '57439d4706msh640c83a58183221p11da97jsn0e273c3e369e',
                    'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
                }
            }

            const response = await fetch('https://gogoanime2.p.rapidapi.com/popular?page=1', options);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();


            setMovies(data);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        console.log("heloo")
        fetchanime();
    }, [fetchanime]);
    let content = <p>Found no movies.</p>;
    let content2 = <p>Found no movies.</p>;

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
        console.log(page)


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
            console.log(data)

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
                    <News />
                </div>
            </div></>
    );
}

export default Home;



