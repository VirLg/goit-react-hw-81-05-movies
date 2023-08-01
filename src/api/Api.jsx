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
  console.log(movieId);
  const data = axios(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=c36fe88d7e0d6b58145a986005d5f8b7`
  );
  if (!data) return new Error('some');
  return data;
};

// export const ApiDeteils = function (id) {
//   const options = {
//     method: 'GET',
//     url: `https://api.themoviedb.org/3/movie/${id}`,
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer d0d7894e72847cf4bdccbd92204adc61',
//     },
//   };

//   const data = axios
//     .request(options)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
//   return data;
// };
