import {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/movies-api';
import Loader from 'components/Loader/Loader';

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
       <ul>
       {actors < 1 && (
                <span>We don`t have a cast list for this movie!</span>
            )}
       {actors.map(credit => (
                <li key={credit.id && credit.id}>
                    <img
                        src={
                            credit.profile_path
                                ? `https://image.tmdb.org/t/p/original${credit.profile_path}`
                                : 'https://abrakadabra.fun/uploads/posts/2022-02/1644922919_1-abrakadabra-fun-p-risunki-krutie-dlya-patsanov-1.jpg'
                        }
                        alt={credit.name}
                        width='100'                    />
                    <h3>{credit.name}</h3>
                    <p>{credit.character}</p>
                </li>
            ))}
       </ul>
       {isLoading && <Loader className="loader" />}
    </>
  )
}
export default Cast