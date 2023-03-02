import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { RiMovie2Line } from 'react-icons/ri';

export const WrapperHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: black;
  height: 100px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 20px;
`;

export const NavItem = styled.li``;

export const Link = styled(NavLink)`
  font-size: 36px;
  color: white;
  margin: auto;
  text-decoration: none;

  &.active {
    color: orange;
  }

  &:hover {
    color: orange;
  }
`;

export const ReactIcons = styled(RiMovie2Line)`
  fill: orange;
  width: 40px;
  height: 40px;
`;
