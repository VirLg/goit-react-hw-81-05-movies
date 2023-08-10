import React, { useEffect, useState } from 'react';
import MoviesSearchForm from './MoviesSearchForm';
import { ApiKeySearch } from 'api/Api';
import MoviePageItem from './MoviePageItem';
import { useSearchParams } from 'react-router-dom';
import MovieDetails from 'pages/movieDetails/MovieDetails';

const MoviesPage = () => {
  // const [search, setSearch] = useState('');
  const [keyArr, setKeyArr] = useState('');

  // const handleSearch = value => {
  //   setSearch(value);
  // };
  const [searchParams] = useSearchParams();
  const search = searchParams.get('query');
  useEffect(() => {
    const keySearch = async () => {
      if (search) {
        const arr = await ApiKeySearch(search);
        setKeyArr(arr.data.results);
      }
    };
    keySearch();
  }, [search]);

  return (
    <>
      <MoviesSearchForm />
      <MoviePageItem prop={keyArr} />

      {/* {keyArr && <>{keyArr}</>} */}
    </>
  );
};

export default MoviesPage;
