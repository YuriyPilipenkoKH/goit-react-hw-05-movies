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
        
    }
    &>.movies{
        /* justify-content: center; */
        align-self: flex-start;
    }

    &>.moviedetails-container {
        align-self: flex-start;
    }

    &>footer {
       align-self: flex-end;
       
    }
`