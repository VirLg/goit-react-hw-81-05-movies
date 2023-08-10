import React from 'react';
import { Link } from 'react-router-dom';

const MoviePageItem = ({ prop }) => {
  console.log('prop', prop);
  return (
    <ul>
      {prop &&
        prop.map(({ original_title, id }) => (
          <li>
            <Link to={`${id}`}>{original_title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default MoviePageItem;
