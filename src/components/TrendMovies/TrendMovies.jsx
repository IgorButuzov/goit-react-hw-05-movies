import { useState, useEffect } from 'react'
import getFromApi from "../fetch";

import css from '../TrendMovies/TrendMovies.module.css'

const TrendMovies = () => {
  const [my, setMy] = useState([]);
  
  useEffect(()=>{
    getFromApi.trendingMovies()
  .then(data => setMy(data.results))
  },[my])

  return (
    <ul className={css.movieBox}>
      {my.map(({ poster_path, name, title, id }) =>(<li key={id}>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={''} width={300} />
        <p>{title}</p>
        <p>{name}</p>
      </li>))
        }
    </ul>
  );
};

export default TrendMovies;