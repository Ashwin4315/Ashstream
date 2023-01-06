

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
   <div className={classes.box}>
    <img src={props.image}/>
    <h3>{props.title}</h3>
    <p>{props.releaseDate}</p>

   </div>
  );
};

export default Movie;


