import React, { useState } from 'react';

const MoviesSearchForm = ({ prop }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSearchForm = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('prop', prop);
    prop(inputValue);
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
