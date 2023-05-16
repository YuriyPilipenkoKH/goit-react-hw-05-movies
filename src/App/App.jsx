import React from 'react';
// import { Routes, Route,  } from "react-router-dom";
import { searchTrendingMovies } from 'services/movies-api';
import { Container } from 'components/container/Container';
import { Header, Link } from './App.styled';

const App = () => {

  searchTrendingMovies()

  return (
    <Container>
      <Header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/movies'>Movies</Link>
        </nav>
      </Header>
       {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Routes> */}
    </Container>
 
  );
};

export default App;
