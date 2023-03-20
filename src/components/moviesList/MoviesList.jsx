import { Link, useLocation } from 'react-router-dom';
import css from '../moviesList/MovieList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.movieBox}>
      {movies.map(({ original_title, poster_path, id }) => (
        <Link to={`/movies/${id}`} state={{ from: location }} className={css.movieLink} key={id}>
        <li  className={css.movieItem}>
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={original_title}
                className={css.moviePoster}
              />
              <p className={css.moviePoster}>{original_title} </p>
        </li>
        </Link>
      ))}
    </ul>
  );
};
