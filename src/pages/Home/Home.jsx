import { fetchTrendingMovies } from "services/movies-api"
import { useEffect,useState } from "react"
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { StyledLink, StyledUl, MovieTitle, CardInfo, Count, ImgWrap } from "./Home.styled"; 

 
const Home = () => {
    const [movies, setMovies] = useState([])
    // const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

useEffect(() => {
    setIsLoading(true);
    fetchTrendingMovies(1)
    .then(response => {
        console.log('response', response)
         setMovies(response.results)})

    setTimeout(() => {
        setIsLoading(false);
    }, 300);
}, [])

    return (
        <>
        <h2 className="visually-hidden"> Trending Movies</h2>
        <StyledUl id="container">
            {movies.map(movie => {
                return <li key={movie.id} >
                      <StyledLink  
                             to={`movies/${movie.id}`}
                             state={{ from: location }}
                                >
                    <ImgWrap>
                        <img
                         width='200'
                        src ={ `https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt ={movie.original_title}
                         />
                    </ImgWrap>

                     <CardInfo className="card__info">
                         <MovieTitle>{movie.original_title}</MovieTitle>
                         <p>
                            <Count>{(movie.vote_average).toFixed(1)}
                            </Count>/10
                            </p>
                     </CardInfo>
                     </StyledLink>
                </li>
                
            })}
        </StyledUl>
        {isLoading && <Loader className="loader" />}
        </>
    )

}

export default Home