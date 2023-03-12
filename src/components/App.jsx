// import { Routes, Route, NavLink } from "react-router-dom";
import getFromApi from "./fetch";



export const App = () => {

  return (
    <div>
     start
    </div>
  );
};


getFromApi.trendingMovies().then(data => console.log(data));
getFromApi.searchMovies().then(data => console.log(data));
getFromApi.movieDetails().then(data => console.log(data));
getFromApi.movieCredits().then(data => console.log(data));
getFromApi.movieReviews().then(data => console.log(data));