import { Link } from 'react-router-dom';


import classes from './Movie.module.css';

const Movie = (props) => {
  return (
   <div className={classes.box} key={props.id}>
    <Link to={`/Detail/:${props.id}`} >
      <div >
       <img src={props.image} alt={props.title} className={classes.img} /></div>
    </Link>
    <h3>{props.title}</h3>
    <p>{props.releaseDate}</p>

   </div>
  );
};

export default Movie;


