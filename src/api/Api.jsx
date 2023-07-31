import axios from "axios";
// axios.defaults.baseURL='https://api.themoviedb.org/3/movie/157336'

const Api = function () {


  const data = axios('https://api.themoviedb.org/3/trending/movie/day?api_key=c36fe88d7e0d6b58145a986005d5f8b7')
if(!data) return new Error('some')
  return data


};
export default Api;
