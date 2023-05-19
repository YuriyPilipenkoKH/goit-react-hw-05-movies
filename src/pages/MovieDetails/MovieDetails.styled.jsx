import styled  from 'styled-components';
import {Link}  from 'react-router-dom';


export const CardWrapper  = styled.div`
    width: 90%;
    height: 450px;
    /* margin: 0 auto; */
    display: flex;
    gap: 32px;
    background-color: var(--beige);
    border-radius: 8px;
    box-shadow: var(--shadow-four);

    &>img {
        border-radius: 8px 0 0 8px;
    }
`

export const StyledLink  = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-weight: 400;
`
export const InfoWrapper  = styled.div`

    padding:20px 20px 20px 0;
    display: grid;
    grid-row-gap: 8px;
    grid-column-gap: 28px;
    grid-template-columns: 200px auto;
    grid-template-rows:  70px auto 30px 30px 50px;
   
   &>h2 {
    grid-column: 1 / 3;
   }

   &>p{
    grid-column: 1 / 3;
   }

   &>.genres{
    justify-self: center;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &>li {
        background-color: var(--sand-color);
        padding: 4px 12px;
        border-radius: 4px;
        color: #555;
        font-weight: 600;
    }
   }

   &>.special-links{
    grid-column: 1 / 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 19px;
   

   }

   &>span {
        color: #555;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;

        &>.dynamic{
            background-color: #777;
            padding: 4px 8px;
            border-radius: 4px;
            color: #eee;
            font-size: 12px;
            font-weight: 500;
        }
    }
`