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
    position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--green);
  color: #eee;
  border: none;
  border-radius: 4px;
  padding: 8px 24px ;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  box-shadow: var(--shadow-four);
  transition: all 0.4s ease;

  &:hover  {
 
    background-color: var(--bright-green);
    box-shadow: var(--shadow-two);
   
    & >svg {
    fill: #888;
    }
  }

  &:active {
    transform: scale(0.98);
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #5b24ff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.4s, opacity 1s;
  }

  &:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }


    width: 100%;
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