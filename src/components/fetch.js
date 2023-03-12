import axios from 'axios';

const API_KEY = '671c14eb1babf71c7ecd9b35ab5716a8';
const BASE_URL = 'https://api.themoviedb.org/3/';
let pageNum = 1;
let movieId = 82856;
const query = 'cat';

function trendingMovies() {
    return axios
    .get(`${BASE_URL}trending/all/day?api_key=${API_KEY}&page=${pageNum}`)
    .then(response => response.data)
    .catch(err => console.log(err))
};

function searchMovies() {
    return axios
    .get(`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${pageNum}&include_adult=false`)
    .then(response => response.data)
    .catch(err => console.log(err))
};

function movieDetails() {
    return axios
    .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)
    .then(response => response.data)
    .catch(err => console.log(err))
};

function movieCredits() {
    return axios
    .get(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(response => response.data)
    .catch(err => console.log(err))
};

function movieReviews() {
    return axios
    .get(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&page=1`)
    .then(response => response.data)
    .catch(err => console.log(err))
};

const getFromApi = {
    trendingMovies,
    searchMovies,
    movieDetails,
    movieCredits,
    movieReviews,
};

export default getFromApi;