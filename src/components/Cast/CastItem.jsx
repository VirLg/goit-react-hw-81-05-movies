import React from 'react';

const CastItem = ({ name, profile_path }) => {
  return (
    <li>
      <div>
        <h2>{name}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={name}
          width={'40px'}
        />
      </div>
    </li>
  );
};

export default CastItem;
