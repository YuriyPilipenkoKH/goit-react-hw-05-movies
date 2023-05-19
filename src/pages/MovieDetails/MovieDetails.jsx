import { Outlet,  useLocation , useParams} from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { fetchMovieById } from 'services/movies-api';
import Loader from 'components/Loader/Loader';
import { CardWrapper , StyledLink, InfoWrapper} from './MovieDetails.styled';
import Button from 'components/Button/Button';

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

    const { title, poster_path
,        genres, overview, vote_average,release_date} = movie
    
  return (
    <div className='moviedetails-container'>
        <Button className= 'back-link'>
            <StyledLink to={backLinkLocation.current}>Go back</StyledLink>
        </Button>
        <CardWrapper>
            <img src={poster_path &&  `https://image.tmdb.org/t/p/w500/${poster_path}`}
             alt={title}
             width='300'
             />
             <InfoWrapper>
                 <h2>{title}</h2>
                
                 <p>{overview}</p>
                 <span>User score: <span className='dynamic'>{vote_average && vote_average.toFixed(1)}/10</span></span>
                 
                 <ul className='genres'>
                 {genres &&
                    genres.slice(0, 3).map(genre => (
                        <li key={genre.id}>
                            {genre.name}
                        </li>
                    ))}
                 </ul>
                 <span>Release: <span className='dynamic'>{release_date}</span></span>
        <ul className='special-links'>
            <Button >
                <StyledLink to="cast">Cast</StyledLink>
            </Button>
            <Button>
                <StyledLink to="reviews">Reviews</StyledLink>
            </Button>
        </ul>

             </InfoWrapper>
     
        </CardWrapper>


        {isLoading && <Loader className="loader" />}
      <Outlet/>
    </div>
  )
}
export default MovieDetails