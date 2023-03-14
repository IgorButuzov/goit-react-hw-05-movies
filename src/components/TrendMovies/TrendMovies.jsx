import { useState, useEffect } from 'react'
import getFromApi from "../fetch";

import Movielist from '../TrendMovies/movielist'
import css from '../TrendMovies/TrendMovies.module.css'

const TrendMovies = ({page}) => {
  const [my, setMy] = useState([]);
  
  useEffect(()=>{
    getFromApi.trendingMovies(page)
  .then(data => setMy(data.results))
  },[page])

  return (
    <ul className={css.movieBox}>
      <Movielist my={my}/>
    </ul>
  );
};

export default TrendMovies;