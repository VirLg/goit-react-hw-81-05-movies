import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviePageItem = ({ prop }) => {
  const location = useLocation();
  return (
    <ul>
      {prop &&
        prop.map(({ original_title, id }) => (
          <li key={id}>
            <Link to={`${id}`} state={location}>
              {original_title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default MoviePageItem;
