import React from 'react';
import { Route, Switch} from "react-router-dom";

// import { searchTrendingMovies } from 'services/movies-api';
import { Header, Link } from './App.styled';
import { Container } from 'components/container/Container';
import { Home } from 'pages/Home';

const App = () => {

 

  return (
    <Container>
      <Header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/movies'>Movies</Link>
        </nav>
      </Header>
  
       <Switch>
       <Route exact path="/">
            <Home />
          </Route>
     
      </Switch>
  
    </Container>
 
  );
};

export default App;
