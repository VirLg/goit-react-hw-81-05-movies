import React, { useCallback, useEffect, useState } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Api from 'api/Api';
import MovieDetailsItem from './MovieDetailsItem';
const MovieDetails = () => {
  const [item, setItem] = useState(null);
  const { movieId } = useParams();

  const details = useCallback(() => {
    const handleApiDetails = async () => {
      const itemDetails = await Api(`/movie/${movieId}?`);
      setItem(itemDetails.data);
    };
    handleApiDetails();
  }, [movieId]);
  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) details();
    return () => (isCancelled = true);
  }, [details]);
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(location.state);
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        Go to back link
      </button>
      {item && <MovieDetailsItem prop={item} />}

      <ul style={{ listStyle: 'none' }}>
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
