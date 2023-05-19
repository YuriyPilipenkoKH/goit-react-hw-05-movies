import { fetchTrendingMovies } from "services/movies-api"
import { useEffect,useState } from "react"
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { StyledLink, StyledUl } from "./Home.styled"; 
 
const Home = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

useEffect(() => {
    setIsLoading(true);
    fetchTrendingMovies()
    .then(response =>  setMovies(response))

    setTimeout(() => {
        setIsLoading(false);
    }, 300);
}, [])

    return (
        <>
        <h2 className="visually-hidden"> Trending Movies</h2>
        <StyledUl>
            {movies.map(movie => {
                return <li key={movie.id} >
                      <StyledLink  
                             to={`movies/${movie.id}`}
                             state={{ from: location }}
                                >
                    <img 
                     width='200' 
                    src ={ `https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt ={movie.original_title}                         
                     />

                     <div className="card__info">
                         <p>{movie.original_title}</p>
                     </div>
                     </StyledLink>
                </li>
                
            })}
        </StyledUl>
        {isLoading && <Loader className="loader" />}
        </>
    )

}

export default Home