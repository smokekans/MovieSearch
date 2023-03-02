import axios from 'axios';

const KEY = '31cfad655ad65f43227562d8d472bc2d';
const BASE_URL = 'https://api.themoviedb.org/3/';
axios.defaults.baseURL = BASE_URL;

export async function getTrending() {
  const response = await axios('trending/all/day', {
    params: { api_key: KEY },
  });
  return response.data;
}

export async function searchMovies(query) {
  const response = await axios('search/movie', {
    params: { api_key: KEY, query },
  });
  return response.data;
}

export async function getMovieDetails(id) {
  const response = await axios(`movie/${id}`, {
    params: { api_key: KEY },
  });
  return response.data;
}

export async function getMovieCredits(id) {
  const response = await axios(`movie/${id}/credits`, {
    params: { api_key: KEY },
  });
  return response.data.cast;
}

export async function getMovieReviews(id) {
  const response = await axios(`movie/${id}/reviews`, {
    params: { api_key: KEY },
  });
  return response.data.results;
}
