import {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/movies-api';

 const  Reviews =() => {
  const [reviews, setRewiews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
        
    getReviews(movieId)
    .then(response => setRewiews(response))
},[movieId]);

  return (
    <ul>
    {reviews < 1 && (
        <p>We don`t have any reviews for this movie!</p>
    )}
    {reviews.map(review => (
        <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
        </li>
    ))}
</ul>
  )
}
export default Reviews