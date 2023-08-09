import axios from 'axios';
// axios.defaults.baseURL='https://api.themoviedb.org/3/movie/157336'

const Api = function () {
  const data = axios(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=c36fe88d7e0d6b58145a986005d5f8b7'
  );
  if (!data) return new Error('some');
  return data;
};
export default Api;

export const ApiDeteils = function ({ movieId }) {
  const data = axios(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=c36fe88d7e0d6b58145a986005d5f8b7`
  );
  if (!data) return new Error('some');
  return data;
};

export const ApiKeySearch = value => {
  const data = axios(
    `https://api.themoviedb.org/3/search/${value}?api_key=c36fe88d7e0d6b58145a986005d5f8b7`
  );
  if (!data) return new Error('some');
  return data;
};
export const ApiCastSearch = ({ movieId }) => {
  const data = axios(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c36fe88d7e0d6b58145a986005d5f8b7`
  );

  if (!data) return new Error('some');
  return data;
};
export const ApiReviews = ({ movieId }) => {
  console.log(movieId);
  const data = axios(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=c36fe88d7e0d6b58145a986005d5f8b7`
  );

  if (!data) return new Error('some');
  return data;
};

export const ApiSearch = value => {
  console.log(value);
  const data = axios(
    `https://api.themoviedb.org/3/${value}/movie?api_key=c36fe88d7e0d6b58145a986005d5f8b7`
  );

  if (!data) return new Error('some');
  return data;
};