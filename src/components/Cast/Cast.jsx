import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from 'api/Api';
import CastItem from './CastItem';
import Barbara from '../../pages/Barbara.jpeg';
const Cast = () => {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();
  console.log('moviedId', movieId);
  const castCallback = useCallback(() => {
    const hadleApiCast = async () => {
      const castApi = await Api(`/movie/${movieId}/credits?`);
      setCast(castApi.data.cast);
    };
    hadleApiCast();
  }, [movieId]);
  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) castCallback();
    return () => (isCancelled = true);
  }, [castCallback]);

  return (
    <ul
      style={{
        listStyle: 'none',
      }}
    >
      {cast &&
        cast.map(({ name, profile_path = Barbara }) => {
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
