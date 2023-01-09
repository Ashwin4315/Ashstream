import { useState } from 'react';
import { useParams } from "react-router-dom";
import useGetdetail from "../hooks/useGetdetail";
import useGetstream from "../hooks/useGetstream";
import Videoplayer from "./Videoplayer";
import styles from "./Detail.module.css"


function Detail() {

    const [no, setno] = useState(1)
    const { id } = useParams();
    const link = id.slice(1, id.length)
     
    const stream =useGetstream(link,no)
    const detail =useGetdetail(link)

    console.log(detail)

    let count = detail.totalEpisodes;

    function array(count) {
        let x = [];
        for (let i = 1; i <= count; i++) {
            x[i] = i;
        }
        return x
    }

    let button = array(count)




    return (

        <div className={styles.con}>
            <Videoplayer url={stream} />

            <div className={styles.info}>
                <div className={styles.btns}>
                    {button.map((item, index) => {
                        return <button  className={styles.btn} key={index} onClick={()=>{setno(index)}}>{index}</button>
                    })}
                </div>

                <div className={styles.details} style={{backgroundImage:`${detail.animeImg}`}}>




                   <div className={styles.image}>
                    <img className={styles.images} src={detail.animeImg} alt={detail.animeTitle} />
                   </div>

                   <div className={styles.displays}>
                    <h2>{detail.animeTitle}</h2>
                    <p>genres:{detail.genres}</p>
                    <p>type:{detail.type}</p>
                    <p>{detail.synopsis}</p>
                    <p>releasedDate:{detail.releasedDate}</p>
                    <p>status:{detail.status}</p>
                   </div>


                </div>
            </div>
        </div>

    );
}

export default Detail;