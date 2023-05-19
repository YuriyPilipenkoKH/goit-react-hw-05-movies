import styled  from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink= styled(Link)`
    width: 200px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.4s ease;

    &:hover {
        transform: scale(1.02);
        box-shadow: var(--shadow-two);
    }
`

export const ImgWrap= styled.div`
    width: 200px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d9e3fa;
`


export const StyledUl= styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    column-gap: 32px;
    justify-content: center;
`

export const CardInfo= styled.div`
    display: flex;
    gap: 8px;
    justify-content: space-between;
    padding:  12px;
    background-color: var(--beige);
    
    border-radius: 0 0 8px 8px;

    &>p {
        font-size: 10px;
        color: #555;
    }
`

export const MovieTitle= styled.h3`
    height: 70px;
    font-size: 14px;
    color: #222;
`
export const Count= styled.span`
  
    color:var(--blue);
`