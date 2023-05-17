import React from 'react';
import { Route, Routes} from "react-router-dom";
// import { lazy } from 'react';
// import { searchTrendingMovies } from 'services/movies-api';
import { Header, Link } from './App.styled';
import { Container } from 'components/container/Container';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from 'pages/Cast';
import { Reviews } from 'pages/Reviews';
import { ReactComponent as Logo } from '../utils/react-router-movies.svg'

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
