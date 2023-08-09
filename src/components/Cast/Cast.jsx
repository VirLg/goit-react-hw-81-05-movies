import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiCastSearch } from 'api/Api';
import CastItem from './CastItem';
const Cast = () => {
  const [cast, setCast] = useState('');
  const movieId = useParams();

  useEffect(() => {
    const hadleApiCast = async () => {
      const castApi = await ApiCastSearch(movieId);
      setCast(castApi.data.cast);
    };
    hadleApiCast();
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(({ name }) => {
          return <CastItem name={name} />;
        })}
    </ul>
  );
};

export default Cast;
