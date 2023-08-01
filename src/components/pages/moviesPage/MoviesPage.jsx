import React from 'react';

const MoviesPage = () => {
  return (
    <form>
      <label>
        Search movie
        <input
          type="text"
          // value="value"
          name="search"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        />
        <button type="button"> Search</button>
      </label>
    </form>
  );
};

export default MoviesPage;
