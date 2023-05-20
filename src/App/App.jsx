import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';
 import  SharedLayout from "components/SharedLayout/SharedLayout";
import { Container } from 'components/container/Container';


const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

 const App = () => {
  return (
    <Container>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Container>
  )
}
export default App;

// import  Home from 'pages/Home/Home';
// import  Movies  from 'pages/Movies/Movies';
// import  MovieDetails  from 'pages/MovieDetails/MovieDetails';
// import  Cast  from 'components/Cast/Cast';
// import  Reviews  from 'components/Reviews/Reviews';


// const App = () => {

//   return (
//     <Container>
   
//        <Routes>
//        <Route path="/" element={<SharedLayout />}>
//        <Route index element={<Home />}></Route>
//           <Route path="/movies" element={<Movies />}></Route>
//           <Route path="/movies/:movieId" element={<MovieDetails />}>
//               <Route path="cast" element={<Cast />}></Route>
//               <Route path="reviews" element={<Reviews />}></Route>
//           </Route>
//           </Route>
//        </Routes>
      
//     </Container>
 
//   );
// };

// export default App;
