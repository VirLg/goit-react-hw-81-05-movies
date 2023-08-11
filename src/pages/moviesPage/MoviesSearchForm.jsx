import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const MoviesSearchForm = ({ prop }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSearchForm = e => {
    setInputValue(e.target.value);
  };
  const [query, setQuery] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();

    if (!inputValue) {
      Notify.failure('Sorry, the search is not valid.');
      console.log('query', query);
    }
    setQuery({ query: inputValue });
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className="button">
        <span className="button-label">Search</span>
      </button>

      <input type="text" value={inputValue} onChange={handleSearchForm} />
    </form>
  );
};

export default MoviesSearchForm;
