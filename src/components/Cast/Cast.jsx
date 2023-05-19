import {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/movies-api';
import Loader from 'components/Loader/Loader';
import { ListWrap } from './Cast.styled';

 const Cast =()=> {
    const [actors, setActors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();
   
    useEffect(() => {
      setIsLoading(true);
        getCast(movieId)
        .then(response => setActors(response))

        setTimeout(() => {
          setIsLoading(false);
      }, 300);
      
    },[movieId]);

  return (
    <>
       <ListWrap>
       {actors < 1 && (
                <span>We don`t have a cast list for this movie!</span>
            )}
       {actors.slice(0, 16).map(actor => (
                <li key={actor.id && actor.id}>
                    <img
                        src={
                          actor.profile_path
                                ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                                : 'https://abrakadabra.fun/uploads/posts/2022-02/1644922919_1-abrakadabra-fun-p-risunki-krutie-dlya-patsanov-1.jpg'
                        }
                        alt={actor.name}
                        width='200'                    />
                    <div className='info-wrapper'>
                      <h3>{actor.name}</h3>
                      <p>Role: {actor.character}</p>
                    </div>
                </li>
            ))}
       </ListWrap>
       {isLoading && <Loader className="loader" />}
    </>
  )
}
export default Cast