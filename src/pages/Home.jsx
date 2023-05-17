import { searchTrendingMovies } from "services/movies-api"
import { useEffect,useState } from "react"
import MovieCard from "components/MovieCard/MovieCard"
 
export const Home = () => {
    const [movies, setMovies] = useState([])

useEffect(() => {

    searchTrendingMovies()
    .then(response =>  setMovies(response))
   


}, [])

    return (
        <>
        <h1> Trending Movies</h1>
        <ul>
            <MovieCard ></MovieCard>
        </ul>
        </>
    )

}