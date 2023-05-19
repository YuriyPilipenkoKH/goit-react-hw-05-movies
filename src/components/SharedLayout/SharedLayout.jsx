
import { Header, Link } from '../../App/App.styled';
import { Suspense } from 'react';
import {  Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/react-router-movies.svg'
import { ReactComponent as Kharkiv } from '../../images/Kharkiv.svg'


const SharedLayout = () => {
    return (
        <>
      <Header>
        <Logo className="logo"></Logo>

        <nav>
          <Link to='/'>Home</Link>
          <Link to='/movies'>Movies</Link>
        </nav>
        <Kharkiv className="KH-icon"></Kharkiv>
      </Header>

            <Suspense  >
                <Outlet />
            </Suspense>
        </>
    );
};

export default SharedLayout;