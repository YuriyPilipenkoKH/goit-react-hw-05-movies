import { searchMovies } from "services/movies-api"
import { useEffect,useState } from "react"
import {  useLocation , useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { StyledLink, StyledUl, MovieTitle, CardInfo, Count, ImgWrap } from "pages/Home/Home.styled";
import { SearchForm } from "./Movies.styled";
import Button from "components/Button/Button";
import { iconLens2 } from "utils/svgIcons";

 const Movies =() => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')

  const [searchParams, setSearchParams] = useSearchParams();
  const searchWord = searchParams.get('searchWord') ?? '';
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  console.log('searchParams', searchParams, 'searchWord',searchWord);

  useEffect(() => {
    if(searchWord){
      searchMovies(searchWord);
    }

}, [searchWord]);
  
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
  
    // setQuery('');
  };

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     if (query === '') {
//         return setSearchParams({});
//     }
//         searchMovies(query)
//     .then(response => setMovies(response))
//     setSearchParams({searchWord: query });
// };


  return (
    <>
      <h2 className="visually-hidden">Movie Search</h2>
      <SearchForm autoComplete="off" onSubmit={handleSubmit}>

        <input 
        type="text"
         name="query" 
         value={query}
         onChange={handleChange}
        placeholder="Search movies"
         />
        <Button type='submit'> {iconLens2}</Button>

      </SearchForm>

      <StyledUl>
   
            {movies.map(movie => {

                return <li key={movie.id} >
                      <StyledLink   
                             to={`${movie.id}`}
                             state={{ from: location }}               
                                >
                    <ImgWrap>
                      <img
                       width='200'
                       src={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                            : 'https://abrakadabra.fun/uploads/posts/2022-03/1647481521_4-abrakadabra-fun-p-kinokompanii-mira-zastavki-5.jpg'
                                        }
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
export default Movies