import styled  from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink= styled(Link)`
    width: 200px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;

`

export const StyledUl= styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    column-gap: 32px;
    justify-content: center;
`