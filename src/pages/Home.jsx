import { fetchTrendingMovies } from "services/movies-api"
import { useEffect,useState } from "react"
// import MovieCard from "components/MovieCard/MovieCard"
import { Link, useLocation } from 'react-router-dom';
 
const Home = () => {
    const [movies, setMovies] = useState([])
    const location = useLocation();

useEffect(() => {

    fetchTrendingMovies()
    .then(response =>  setMovies(response))
}, [])

    return (
        <>
        <h1> Trending Movies</h1>
        <ul>
            {movies.map(movie => {

                return <li key={movie.id} >
                      <Link  
                             to={`movies/${movie.id}`}
                             state={{ from: location }}
                                 
                                >
                    <img 
                     width='200' 
                    src ={ `https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt ={movie.original_title}
                                     
                     />
                     <p>{movie.original_title}</p>
                     </Link>
                </li>
                
            })}
        </ul>
        </>
    )

}

export default Home