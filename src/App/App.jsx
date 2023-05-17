import { Route, Routes} from "react-router-dom";
// import { Suspense } from "react";
import { Header, Link } from './App.styled';
import { Container } from 'components/container/Container';
import { ReactComponent as Logo } from '../utils/react-router-movies.svg'

// const Home = lazy(() => import('../pages/Home'));
// const Movies = lazy(() => import('../pages/Movies'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Cast = lazy(() => import('../pages/Cast'));
// const Reviews = lazy(() => import('../pages/Reviews'));
// const NotFound = lazy(() => import('pages/NotFound'));

import  Home from 'pages/Home';
import  Movies  from 'pages/Movies';
import  MovieDetails  from 'pages/MovieDetails';
import  Cast  from 'components/Cast/Cast';
import  Reviews  from 'components/Reviews/Reviews';


const App = () => {

  return (
    <Container>
      <Header>
        <Logo width='100' height='32'></Logo>

        <nav>
          <Link to='/'>Home</Link>
          <Link to='/movies'>Movies</Link>
        </nav>
      </Header>

      <Routes>
        <Route path ="/" element={<Home />} />
          <Route path ="/movies" element={<Movies />} />
           <Route path="/movies/:movieId" element={<MovieDetails />}>
                        <Route path="cast" element={<Cast />}></Route>
                        <Route path="reviews" element={<Reviews />}></Route>
                    </Route> 

        <Route/>
     </Routes>
    </Container>
 
  );
};

export default App;
