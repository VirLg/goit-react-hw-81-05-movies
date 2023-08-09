import React from 'react';
import Barbara from '../../Barbara.jpeg';
const CastItem = ({ name, profile_path }) => {
  return (
    <li
      style={{
        margin: '8px',
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${profile_path}` ?? { Barbara }}
          alt={name}
          width={'50px'}
        />

        <h2>{name}</h2>
      </div>
    </li>
  );
};

export default CastItem;
