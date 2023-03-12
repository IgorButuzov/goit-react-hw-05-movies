// import { Routes, Route, NavLink } from "react-router-dom";

import TrendMovies from './TrendMovies/TrendMovies'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn'

export const App = () => {
  

  return (
    <div>
      <TrendMovies />
      <LoadMoreBtn />
    </div>
  );
};


// getFromApi.trendingMovies().then(data => console.log(data));
// getFromApi.searchMovies().then(data => console.log(data));
// getFromApi.movieDetails().then(data => console.log(data));
// getFromApi.movieCredits().then(data => console.log(data));
// getFromApi.movieReviews().then(data => console.log(data));