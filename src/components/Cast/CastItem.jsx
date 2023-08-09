import React from 'react';

const CastItem = ({ name }) => {
  console.log('name', name);
  return (
    <li>
      <h2>{name}</h2>
    </li>
  );
};

export default CastItem;
