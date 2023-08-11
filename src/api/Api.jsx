import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const Api = function (props) {
  const data = axios(`${props}api_key=c36fe88d7e0d6b58145a986005d5f8b7`);
  if (!data) return new Error('some');
  return data;
};
export default Api;
