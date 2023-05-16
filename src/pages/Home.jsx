import { searchTrendingMovies, searchMovies } from "services/movies-api"
import { useEffect } from "react"
import MovieCard from "components/MovieCard/MovieCard"
 
export const Home = () => {

useEffect(() => {

// searchTrendingMovies()
const res = searchMovies()
console.log(res);

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