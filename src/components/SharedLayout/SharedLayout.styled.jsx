import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const MainHeader= styled.header`
  top: 0;
  left: 0;
  width: 100%;
  position: sticky;
  z-index: 100;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: space-between;
  padding: 32px 16px 16px;
  background-color: var(--body-color);
 
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    gap: 18px;
 
  }

  >.logo{
    width: 100px;
    height: 32px;

    color:var(--teal);
    transition: 0.4s ease;

&:hover {
    color: var(--react-color);
}
  }

  >.KH-icon {

    width: 100px;
    height: 32px;
    color: #222;
    transition: 0.4s ease;

    &:hover {
        color: var(--teal);
    }
  }
`

export const StyledLink = styled(NavLink)`
  width: 95px;  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border:2px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: 0.3s ease;

  &:hover{
    border: 2px solid var(--green);
  }

  &.active {
    color: white;
    background-color: var(--green);
    border:2px solid transparent;
  }
`;