import React, { useCallback, useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { ApiDeteils } from 'api/Api';
import MovieDetailsItem from './MovieDetailsItem';
const MovieDetails = () => {
  const [item, setItem] = useState(null);
  const id = useParams();

  const details = useCallback(() => {
    const handleApiDetails = async () => {
      const itemDetails = await ApiDeteils(id);
      setItem(itemDetails.data);
    };
    handleApiDetails();
  }, [id]);
  useEffect(() => {
    details();
  }, [details, id]);
  return (
    <>
      {item && <MovieDetailsItem prop={item} />}

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
