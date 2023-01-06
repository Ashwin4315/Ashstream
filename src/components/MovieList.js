
import { Link } from 'react-router-dom';
import Movie from './Movie';
import classes from './MovieList.module.css';

const MovieList = (props) => {
  return (
    <div className={classes.container}>
    <div className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Link to={`/Detail/:${movie.animeId}`}>
        <Movie
          key={movie.animeId}
          title={movie.animeTitle}
          image={movie.animeImg}
          releaseDate={movie.releasedDate}
        /></Link>
      ))}
    </div></div>
  );
};

export default MovieList;