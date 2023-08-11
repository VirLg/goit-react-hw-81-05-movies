import React, { useEffect, useMemo, useState } from 'react';
import MoviesSearchForm from './MoviesSearchForm';
import { ApiKeySearch } from 'api/Api';
import MoviePageItem from './MoviePageItem';
import { useParams, useSearchParams } from 'react-router-dom';
import MovieDetails from 'pages/movieDetails/MovieDetails';

const MoviesPage = () => {
  // const [search, setSearch] = useState('');
  const [keyArr, setKeyArr] = useState('');

  // const handleSearch = value => {
  //   setSearch(value);
  // };
  const [searchParams] = useSearchParams();
  const search = useMemo(() => searchParams.get('query'), [searchParams]);
  const resetPage = useParams();
  console.log('resetPage', searchParams);
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
