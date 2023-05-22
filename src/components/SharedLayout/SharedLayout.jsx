import { MainHeader, StyledLink,MainFooter} from './SharedLayout.styled'; 
import { Suspense } from 'react';
import {  Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/react-router-movies.svg'
import { ReactComponent as Kharkiv } from '../../images/Kharkiv.svg'


const SharedLayout = () => {
    return (
        <>
      <MainHeader>
        <Logo className="logo" ></Logo>

        <nav>
          <StyledLink to='/'>Home</StyledLink>
          <StyledLink to='/movies'>Movies</StyledLink>
        </nav>
        <Kharkiv className="KH-icon" ></Kharkiv>
      </MainHeader>

      <Suspense >
                <Outlet />
      </Suspense>
      
      <MainFooter>React-hw-05-movies 2023</MainFooter>
        </>
    );
};

export default SharedLayout;