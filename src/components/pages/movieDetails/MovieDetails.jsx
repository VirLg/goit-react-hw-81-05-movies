import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiDeteils } from 'api/Api';
const MovieDetails = () => {
  const [item, setItem] = useState(null);
  const id = useParams();
  useEffect(() => {
    const handleApiDetails = async () => {
      const itemDetails = await ApiDeteils(id);
      setItem(itemDetails.data);
    };
    handleApiDetails();
  }, [id]);

  return (
    <div key={item.id}>
      <img src={item.poster_path} alt={item.title} />
      <h2>{item.title}</h2>
    </div>
  );
};

export default MovieDetails;
