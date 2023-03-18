
import SearchBar from "./SearchBar/SearchBar";
import TrendMovies from './TrendMovies/TrendMovies'
import MovieDetails from './MovieDetails/MovieDetails';

import { Routes, Route, NavLink } from 'react-router-dom';
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <>
    <ul>
      <li><StyledLink  to='/'>Home</StyledLink></li>
      <li><StyledLink  to='/movies'>Movies</StyledLink></li>
    </ul>
    <SearchBar />
    <Routes>
     <Route path='/' element=<div>Home</div>/>
     <Route path='/movies' element={<TrendMovies/>}/>
     <Route path='/movies/:movieId' element={<MovieDetails/>}/>
    </Routes>
    </>
  );
};
