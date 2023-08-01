import React, { useEffect, useState } from 'react';
import MoviesSearchForm from './MoviesSearchForm';
import { ApiKeySearch } from 'api/Api';
import MoviePageItem from './MoviePageItem';

const MoviesPage = () => {
  const [search, setSearch] = useState('');
  const [keyArr, setKeyArr] = useState('');

  const handleSearch = value => {
    setSearch(value);
  };

  useEffect(() => {
    const keySearch = async () => {
      await ApiKeySearch(search);
    };
    const arr = keySearch();
    setKeyArr(arr);
  }, [search]);

  return (
    <>
      <MoviesSearchForm prop={handleSearch} />
      <MoviePageItem prop={keyArr} />
      {search && <>{search}</>}
    </>
  );
};

export default MoviesPage;
