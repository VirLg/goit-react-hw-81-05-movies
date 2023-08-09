import { ApiReviews } from 'api/Api';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const movieId = useParams();
  const [review, setReview] = useState();

  const rewiewCallback = useCallback(() => {
    const handleReview = async () => {
      const data = await ApiReviews(movieId);
      console.log('data', data);
      setReview(data);
    };
    handleReview();
  }, [movieId]);
  useEffect(() => {
    rewiewCallback();
  }, [rewiewCallback]);

  return <div>Reviews</div>;
};

export default Reviews;
