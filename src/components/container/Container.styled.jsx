import styled from 'styled-components';


export const MainContainer = styled.div`
    max-width: 1200px;
    height: 100vh;
    display: grid;
    grid-template-rows: 90px auto  90px;
    place-items: center;
    grid-gap: 30px;
    background-color: var(--body-color);
    padding: 0 16px 32px;
    margin: 0 auto;

    &>header {
        align-self: start;
        height: 86px;
    }
    &>.movies{
        justify-content: center;
        align-self: flex-start;
        height: auto;
    }



    &>footer {
       align-self: flex-end;
       height: 90px;
    }
`