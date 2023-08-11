import React, { useEffect, useState } from 'react';
import Api from 'api/Api';
import HomePageItem from './HomePageItem';
const HomePage = () => {
  const [arrMovies, setArrMovies] = useState([]);

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) handleApi();
    return () => (isCancelled = true);
  }, []);
  const handleApi = async () => {
    const arr = await Api(`/trending/movie/day?`);
    setArrMovies(arr.data.results);
  };
  return (
    <>
      <HomePageItem prop={arrMovies} />
    </>
  );
};

export default HomePage;
