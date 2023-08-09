import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiCastSearch } from 'api/Api';
import CastItem from './CastItem';
const Cast = () => {
  const [cast, setCast] = useState('');
  const movieId = useParams();
  const castCallback = useCallback(() => {
    const hadleApiCast = async () => {
      const castApi = await ApiCastSearch(movieId);
      setCast(castApi.data.cast);
    };
    hadleApiCast();
  }, [movieId]);
  useEffect(() => {
    castCallback();
  }, [castCallback]);

  return (
    <ul>
      {cast &&
        cast.map(({ name, profile_path }) => {
          return (
            <div key={name}>
              <CastItem name={name} profile_path={profile_path} />
            </div>
          );
        })}
    </ul>
  );
};

export default Cast;
