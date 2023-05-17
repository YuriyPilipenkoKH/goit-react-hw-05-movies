import {  Link, NavLink,  useLocation , useParams} from 'react-router-dom';

import {  useEffect, useRef, useState } from 'react';
import { fetchMovieById } from 'services/movies-api';

export const MovieDetails =() => {
    const [movie, setMovie] = useState({})
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocation = useRef(location.state?.from ?? '/');


    useEffect(() => {
        fetchMovieById(movieId)
        .then(response => setMovie(response))
    }, [movieId])

    const { title, poster_path, genres, overview, vote_average } = movie
    
  return (
    <div>
        <Link to={backLinkLocation.current}>Go back</Link>
        <img src={poster_path &&  `https://image.tmdb.org/t/p/w500/${poster_path}`} 
         alt={title}
         width='200' 
         />

         <h2>{title}</h2>
         <p> User score: {vote_average && vote_average.toFixed(2)}%</p>
         <h3>overview</h3>
         <p>{overview}</p>
         <ul>
         {genres &&
            genres.map(genre => (
                <li key={genre.id}>
                    {genre.name}
                </li>
            ))}
         </ul>

         <ul>
            <li>
                <NavLink to="cast">cast</NavLink>
            </li>
            <li>
                <NavLink to="reviews">reviews</NavLink>
            </li>
        </ul>
      
    </div>
  )
}
