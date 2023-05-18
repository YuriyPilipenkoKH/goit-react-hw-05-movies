
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    gap: 8px;
    justify-self: flex-start; 
  }

  >.KH-icon {
    justify-self: flex-end; 
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
