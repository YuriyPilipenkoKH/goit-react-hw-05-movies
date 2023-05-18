import {  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/movies-api';

 const Cast =()=> {
  // const [actors, setActors] = useState([]);
    const { movieId } = useParams();
    console.log('Cast',movieId);

    useEffect(() => {
        console.log('cast');
        getCast(movieId)
        .then(response => console.log(response))
    }, );

  return (
    <>
        <div>Cast
        <h1>Actors</h1>
        </div>
    </>
  )
}
export default Cast