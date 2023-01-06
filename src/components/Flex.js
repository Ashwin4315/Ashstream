import Carousel from 'react-bootstrap/Carousel';
import styles from "./Flex.module.css";
import  { useState,useCallback } from 'react';


function Flex(props) {


    return (
        <div className={styles.container}>
        <Carousel fade prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}>
            <Carousel.Item interval={3000}>
                <img
                    className={`d-block w-100  ${styles.image}`}
                    src={`${props.info[0].animeImg}`}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className={styles.content}>
                        <img
                            className={styles.sm}
                            src={`${props.info[0].animeImg}`}
                            alt="First slide"
                        />
                        <div className={styles.text}>
                            <h1>{`${props.info[0].animeTitle}`}</h1>
                            <p>{`${props.info[0].releasedDate}`}</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
                <img
                    className={`d-block w-100  ${styles.image}`}
                    src={`${props.info[1].animeImg}`}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className={styles.content}>
                        <img
                            className={styles.sm}
                            src={`${props.info[1].animeImg}`}
                            alt="First slide"
                        />
                        <div className={styles.text}>
                            <h1>{`${props.info[1].animeTitle}`}</h1>
                            <p>{`${props.info[1].releasedDate}`}</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className={`d-block w-100  ${styles.image}`}
                    src={`${props.info[2].animeImg}`}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className={styles.content}>
                        <img
                            className={styles.sm}
                            src={`${props.info[2].animeImg}`}
                            alt="First slide"
                        />
                        <div className={styles.text}>
                            <h1>{`${props.info[2].animeTitle}`}</h1>
                            <p>{`${props.info[2].releasedDate}`}</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className={`d-block w-100  ${styles.image}`}
                    src={`${props.info[3].animeImg}`}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className={styles.content}>
                        <img
                            className={styles.sm}
                            src={`${props.info[3].animeImg}`}
                            alt="First slide"
                        />
                        <div className={styles.text}>
                            <h1>{`${props.info[3].animeTitle}`}</h1>
                            <p>{`${props.info[3].releasedDate}`}</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className={`d-block w-100  ${styles.image}`}
                    src={`${props.info[4].animeImg}`}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className={styles.content}>
                        <img
                            className={styles.sm}
                            src={`${props.info[4].animeImg}`}
                            alt="First slide"
                        />
                        <div className={styles.text}>
                            <h1>{`${props.info[4].animeTitle}`}</h1>
                            <p>{`${props.info[4].releasedDate}`}</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className={`d-block w-100  ${styles.image}`}
                    src={`${props.info[5].animeImg}`}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className={styles.content}>
                        <img
                            className={styles.sm}
                            src={`${props.info[5].animeImg}`}
                            alt="First slide"
                        />
                        <div className={styles.text}>
                            <h1>{`${props.info[5].animeTitle}`}</h1>
                            <p>{`${props.info[5].releasedDate}`}</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className={`d-block w-100  ${styles.image}`}
                    src={`${props.info[6].animeImg}`}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className={styles.content}>
                        <img
                            className={styles.sm}
                            src={`${props.info[6].animeImg}`}
                            alt="First slide"
                        />
                        <div className={styles.text}>
                            <h1>{`${props.info[6].animeTitle}`}</h1>
                            <p>{`${props.info[6].releasedDate}`}</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className={`d-block w-100  ${styles.image}`}
                    src={`${props.info[7].animeImg}`}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className={styles.content}>
                        <img
                            className={styles.sm}
                            src={`${props.info[7].animeImg}`}
                            alt="First slide"
                        />
                        <div className={styles.text}>
                            <h1>{`${props.info[7].animeTitle}`}</h1>
                            <p>{`${props.info[7].releasedDate}`}</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className={`d-block w-100  ${styles.image}`}
                    src={`${props.info[8].animeImg}`}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className={styles.content}>
                        <img
                            className={styles.sm}
                            src={`${props.info[8].animeImg}`}
                            alt="First slide"
                        />
                        <div className={styles.text}>
                            <h1>{`${props.info[8].animeTitle}`}</h1>
                            <p>{`${props.info[8].releasedDate}`}</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

         
        </Carousel>
        </div>
    );
}

export default Flex;