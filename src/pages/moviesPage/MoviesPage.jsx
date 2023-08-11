import React, { useEffect, useMemo, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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
        arr.data.results.length
          ? setKeyArr(arr.data.results)
          : Notify.failure('Sorry, not rerults of your search.');
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
