import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesSearchForm = ({ prop }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSearchForm = e => {
    setInputValue(e.target.value);
  };
  const [query, setQuery] = useSearchParams();
  const handleSubmit = e => {
    e.preventDefault();
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
