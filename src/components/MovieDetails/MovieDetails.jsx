import { useState,useEffect } from "react";

import getFromApi from "../fetch";

const MovieDetails = () => {
    // eslint-disable-next-line
    const[movieById,setByMovieId] = useState({})
    
    useEffect(()=>{
      getFromApi.movieDetails(594767)
    .then(data => setByMovieId(data))
    },[])
    console.log(movieById);
    return (
        
            <li >
            <img src={`https://image.tmdb.org/t/p/w500/${movieById.backdrop_path}`} alt={''} width={400} />
        </li> 
        
    );
}

export default MovieDetails;