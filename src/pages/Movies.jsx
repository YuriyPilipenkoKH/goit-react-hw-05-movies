import { searchMovies } from "services/movies-api"
import { useEffect,useState } from "react"

export const Movies =() => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')

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
    <div>
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
      
    </div>
  )
}
