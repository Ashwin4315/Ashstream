
import Movie from './Movie';
import classes from './MovieList.module.css';

const MovieList = (props) => {
  return (
    <div className={classes.container}>
    <div className={classes['movies-list']}>
      {props.movies.map((movie) => (
        
        <Movie
          key={movie.animeId}
          id={movie.animeId}
          title={movie.animeTitle}
          image={movie.animeImg}
          releaseDate={movie.releasedDate}
        />
      ))}
    </div></div>
  );
};

export default MovieList;