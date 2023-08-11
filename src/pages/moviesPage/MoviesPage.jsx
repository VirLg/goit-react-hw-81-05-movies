import React, { useEffect, useMemo, useState } from 'react';
import MoviesSearchForm from './MoviesSearchForm';
import Api from 'api/Api';
import MoviePageItem from './MoviePageItem';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  // const [search, setSearch] = useState('');
  const [keyArr, setKeyArr] = useState('');

  // const handleSearch = value => {
  //   setSearch(value);
  // };
  const [searchParams] = useSearchParams();
  const search = useMemo(() => searchParams.get('query'), [searchParams]);

  useEffect(() => {
    const keySearch = async () => {
      if (search) {
        const arr = await Api(`/search/movie?query=${search}&`);
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
