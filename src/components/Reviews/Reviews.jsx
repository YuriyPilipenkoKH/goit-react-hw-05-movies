import {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/movies-api';
import Loader from 'components/Loader/Loader';
import { ReviewList } from './Reviews.styled';

 const  Reviews =() => {
  const [reviews, setRewiews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);    
    getReviews(movieId)
    .then(response => setRewiews(response))

    setTimeout(() => {
      setIsLoading(false);
  }, 300);
},[movieId]);

  return (
    <>
      <ReviewList>
      {reviews < 1 && (
          <p>We don`t have any reviews for this movie!</p>
      )}
      {reviews.map(review => (
          <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
          </li>
      ))}
      </ReviewList>
      {isLoading && <Loader className="loader" />}
    </>
  )
}
export default Reviews