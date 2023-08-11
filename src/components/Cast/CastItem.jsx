import React from 'react';
import Barbara from '../../pages/Barbara.jpeg';
const CastItem = ({ name, profile_path }) => {
  console.log('profile_path', profile_path);
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
        {profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt={name}
            width={'50px'}
          />
        ) : (
          <img src={Barbara} alt="" width={'50px'} />
        )}
        <h2>{name}</h2>
      </div>
    </li>
  );
};

export default CastItem;
