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
  console.log('cast', cast);
  return (
    <ul>
      {cast &&
        cast.map(({ name, profile_path }) => {
          return <CastItem name={name} profile_path={profile_path} />;
        })}
    </ul>
  );
};

export default Cast;
