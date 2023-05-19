import { searchMovies } from "services/movies-api"
import { useEffect,useState } from "react"
import { Link, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

 const Movies =() => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    
  }, [])
  
  const handleChange = (e) => {
    const { value } = e.currentTarget;  
    setQuery(value);
 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    searchMovies(query)
    .then(response => setMovies(response))

    setTimeout(() => {
      setIsLoading(false);
  }, 300);
  
    setQuery('');
  };


  return (
    <>
      <h2 className="visually-hidden">Movie Search</h2>
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
                             to={`${movie.id}`}
                             state={{ from: location }}               
                                >
                    <img 
                     width='200' 
                     src={
                      movie.poster_path
                          ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                          : 'https://abrakadabra.fun/uploads/posts/2022-03/1647481521_4-abrakadabra-fun-p-kinokompanii-mira-zastavki-5.jpg'
                  }
                    alt ={movie.original_title}                  
                     />
                     <p>{movie.original_title}</p>
                     </Link>
                </li>
                
            })}
        </ul>
        {isLoading && <Loader className="loader" />}
    </>
  )
}
export default Movies