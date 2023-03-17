import { useState, useEffect } from 'react'
import getFromApi from "../fetch";

import Movielist from '../TrendMovies/movielist'
import css from '../TrendMovies/TrendMovies.module.css'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'

const TrendMovies = () => {
  const [pageNum, setPageNum] = useState(1);
  const [bestMovies, setBestMovies] = useState([]);
  
  useEffect(()=>{
    getFromApi.trendingMovies(pageNum)
  .then(data => setBestMovies(data.results))
  },[pageNum])

  return (
    <>
    <ul className={css.movieBox}>
      <Movielist bestMovies={bestMovies}/>
    </ul>
    <LoadMoreBtn pageNum={setPageNum}/>
    </>
  );
};

export default TrendMovies;