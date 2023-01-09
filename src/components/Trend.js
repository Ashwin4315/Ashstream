import useJiken from "../hooks/useJiken";
import styles from "./Trend.module.css"


function Trend() {
  

    const Trend =useJiken()
    

    return (
        <div className={styles.container}>
         
         {Trend.map((top,index)=>{
            return(
                <div key={index} className={styles.box}>
                    <img src={top.images.jpg.image_url} className={styles.image} alt={top.title}/>
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

export default Trend;