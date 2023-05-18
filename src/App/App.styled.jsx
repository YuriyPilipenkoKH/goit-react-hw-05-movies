
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: space-between;
  padding: 8px ;
 
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    gap: 18px;
 
  }

  >.logo{
    width: 100px;
    height: 32px;
  }

  >.KH-icon {

    width: 100px;
    height: 32px;
  }
`;



export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
