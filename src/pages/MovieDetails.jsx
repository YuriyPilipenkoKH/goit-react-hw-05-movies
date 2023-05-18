import { Outlet,  Link,  useLocation , useParams} from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { fetchMovieById } from 'services/movies-api';
import Loader from 'components/Loader/Loader';

 const MovieDetails =() => {
    const [movie, setMovie] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocation = useRef(location.state?.from ?? '/');


    useEffect(() => {
        setIsLoading(true);
        fetchMovieById(movieId)
        .then(response => setMovie(response))

        setTimeout(() => {
            setIsLoading(false);
        }, 300);
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
                <Link to="cast">cast</Link>
            </li>
            <li>
                <Link to="reviews">reviews</Link>
            </li>
        </ul>
        {isLoading && <Loader className="loader" />}
      <Outlet/>
    </div>
  )
}
export default MovieDetails