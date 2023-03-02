import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListMovies = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ItemMovies = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;
  margin-bottom: 20px;
`;

export const ImageMovies = styled.img`
  width: 95%;
  height: 100%;
  transition: width 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    width: 100%;
  }
`;

export const LinkMovies = styled(Link)`
  color: white;
  text-decoration: none;
  text-align: center;
  text-shadow: 0 0 black;
  &:hover {
    color: orange;
  }
`;
