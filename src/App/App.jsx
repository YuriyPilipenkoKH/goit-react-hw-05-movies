import { Route, Routes } from "react-router-dom";
// import { Suspense } from "react";
import { Container } from 'components/container/Container';


import  Home from 'pages/Home/Home';
import  Movies  from 'pages/Movies/Movies';
import  MovieDetails  from 'pages/MovieDetails/MovieDetails';
import  Cast  from 'components/Cast/Cast';
import  Reviews  from 'components/Reviews/Reviews';
import  SharedLayout from "components/SharedLayout/SharedLayout";

const App = () => {

  return (
    <Container>
   
       <Routes>
       <Route path="/" element={<SharedLayout />}>
       <Route index element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          </Route>
       </Routes>
      
    </Container>
 
  );
};

export default App;
