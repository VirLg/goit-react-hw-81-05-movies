import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiDeteils } from 'api/Api';
import MovieDetailsItem from './MovieDetailsItem';
const MovieDetails = () => {
  const [item, setItem] = useState(null);
  const id = useParams();
  useEffect(() => {
    const handleApiDetails = async () => {
      const itemDetails = await ApiDeteils(id);
      setItem(itemDetails.data);
    };
    handleApiDetails();
    // console.log('item', item.poster_path);
  }, [id]);

  return item && <MovieDetailsItem prop={item} />;
};

export default MovieDetails;
