import { useParams } from "react-router-dom";
import Videoplayer from "./Videoplayer";
import { useState, useEffect, useCallback } from 'react';
import styles from "./Detail.module.css"

function Detail() {


    const [no, setno] = useState(1)
    const [news, setnews] = useState([]);
    const [detail, setdetail] = useState([]);
    const { id } = useParams();


    const link = id.slice(1, id.length)

    console.log(link)
    const fetchMoviesHandler = useCallback(async () => {


        try {
            console.log(link)
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

            console.log(info)


            setnews(info);
        } catch (error) {
        }
    }, [link, no]);

    useEffect(() => {
        console.log("heloo")
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);



    const getinfo = useCallback(async () => {


        try {
            console.log(link)

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '57439d4706msh640c83a58183221p11da97jsn0e273c3e369e',
                    'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
                }
            };


            const response = await fetch('https://gogoanime2.p.rapidapi.com/anime-details/overlord-iv', options)

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            console.log(data)


            setdetail(data);
        } catch (error) {
        }
    }, [link]);



    useEffect(() => {
        console.log("heloo")
        getinfo();
    }, [getinfo]);


    

    return (

        <div className={styles.con}>
            <Videoplayer url={news} />
            <div className={styles.info}>
              
            </div>
        </div>

    );
}

export default Detail;