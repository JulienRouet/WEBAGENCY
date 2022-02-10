import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: black;
    color: white;
    height: 90px;
    display: flex;
    justify-content: start;
    align-items: center;
    border: 0.4rem solid;
    z-index: 12;
`;

export const NavLogo = styled(Link)`
  position:relative;
  left: 34%;
  cursor: pointer;  
  color: white;
  font-size: 2.3rem;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;

export const NavLink = styled(Link)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem;
height: 100%;
cursor: pointer;
&:hover {
  color: red;
}
`;


export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: white;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: white;
  }
`;
