import React, { useEffect, useState } from 'react';
import Api from 'api/Api';
import HomePageItem from './HomePageItem';
const HomePage = () => {
  const [arrMovies, setArrMovies] = useState([]);

  useEffect(() => {
    handleApi();
  }, []);
  const handleApi = async () => {
    const arr = await Api();
    setArrMovies(arr.data.results);
  };
  return (
    <ul style={{ listStyle: 'none' }}>
      <HomePageItem prop={arrMovies} />
    </ul>
  );
};

export default HomePage;