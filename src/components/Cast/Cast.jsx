import {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/movies-api';
import Loader from 'components/Loader/Loader';
import { ActorsList, ActorCard  } from './Cast.styled';
import { ImgWrap } from 'pages/Home/Home.styled';
import { Note } from 'pages/Movies/Movies.styled';
import Actor from '../../images/Patrik.png'
import Actress from '../../images/Monica.png'

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
       <ActorsList>
       {actors < 1 && (
                <Note>We don`t have a cast list for this movie!</Note>
            )}
       {actors.slice(0, 16).map(actor => (
                <ActorCard key={actor.id && actor.id}>
                    <ImgWrap>
                      <img
                          src={
                            actor.profile_path
                                  ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                                  :  actor.gender === 1
                                     ? Actress
                                     : Actor
                          }
                          alt={actor.name}
                          width='200'                    />
                    </ImgWrap>
                    <div className='info-wrapper'>
                      <h3>{actor.name}</h3>
                      {(actor.character === '') 
                      ?  <p></p>
                      :  <p>Role: {actor.character}</p>
                      }
                
                    </div>
                </ActorCard>
            ))}
       </ActorsList>
       {isLoading && <Loader className="loader" />}
    </>
  )
}
export default Cast