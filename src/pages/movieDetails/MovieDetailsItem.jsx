import React from 'react';
import Barbara from '../../pages/Barbara.jpeg';
const MovieDetailsItem = ({ prop }) => {
  return (
    <>
      <div>
        {prop.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${prop.poster_path}`}
            alt={prop.title}
            width={'200px'}
          />
        ) : (
          <img src={Barbara} alt="" width={'200px'} />
        )}

        <h2>{prop.title}</h2>
      </div>
    </>
  );
};

export default MovieDetailsItem;
