import { searchMovies } from "services/movies-api"
import { useEffect,useState } from "react"
import { Link, useLocation } from 'react-router-dom';

 const Movies =() => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const location = useLocation();

  useEffect(() => {
    

  }, [])
  
  const handleChange = (e) => {
    const { value } = e.currentTarget;
    
    setQuery(value);
 
  };

  const handleSubmit = (e) => {
  
    e.preventDefault();
    searchMovies(query)
    .then(response => setMovies(response))
  
    setQuery('');
  };




  return (
    <>
      <h2>Movies</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>

        <input 
        type="text"
         name="query" 
         value={query}
         onChange={handleChange}
        
         />
        <button type='submit'>go</button>

      </form>

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
export default Movies