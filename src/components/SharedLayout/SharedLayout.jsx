
import { Header, Link } from '../../App/App.styled';
import { Suspense } from 'react';
import {  Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/react-router-movies.svg'
import { ReactComponent as Kharkiv } from '../../images/Kharkiv.svg'

import { DotLoader } from 'react-spinners';

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
          
            <Suspense
                fallback={
                    <DotLoader
                        style={{ position: 'fixed', top: "50%", left: "50%",  zIndex: "999" }}
                        color="#3682d6"
                        cssOverride={{}}
                        loading
                        size={70}
                    />
                }
            >
                <Outlet />
            </Suspense>
        </>
    );
};

export default SharedLayout;