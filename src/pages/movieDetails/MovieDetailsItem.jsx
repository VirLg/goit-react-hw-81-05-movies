import React from 'react';

const MovieDetailsItem = ({ prop }) => {
  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${prop.poster_path}`}
          alt={prop.title}
          width={'200px'}
        />
        <h2>{prop.title}</h2>
      </div>
    </>
  );
};

export default MovieDetailsItem;
