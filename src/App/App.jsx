import React from 'react';
import { Route, Routes} from "react-router-dom";

// import { searchTrendingMovies } from 'services/movies-api';
import { Header, Link } from './App.styled';
import { Container } from 'components/container/Container';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';

const App = () => {

 

  return (
    <Container>
      <Header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/movies'>Movies</Link>
        </nav>
      </Header>

      <Routes>
        <Route path ="/" element={<Home />} />
          <Route path ="/movies" element={<Movies />} />
        <Route/>
       
      
    
     </Routes>
    </Container>
 
  );
};

export default App;
