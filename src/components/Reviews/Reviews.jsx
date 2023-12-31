import Api from 'api/Api';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState();

  const rewiewCallback = useCallback(() => {
    const handleReview = async () => {
      const data = await Api(`/movie/${movieId}/reviews?`);

      setReview(data.data.results);
    };
    handleReview();
  }, [movieId]);
  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) rewiewCallback();
    return () => (isCancelled = true);
  }, [rewiewCallback]);

  return (
    review &&
    review.map(({ content, author, id }) => {
      return (
        <div key={id}>
          <h2>{author}</h2>
          <h2 style={{ fontSize: '10px' }}>{content}</h2>
        </div>
      );
    })
  );
};

export default Reviews;
