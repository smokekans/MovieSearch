import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const InfoWrapper = styled.div``;
export const AdditionalWrapper = styled.div``;
export const Image = styled.img``;
export const Title = styled.h2`
  color: white;
  text-shadow: 1px 0 black;
  text-align: center;
  font-size: 36px;
`;
export const Subtitle = styled.h3`
  color: white;
  text-shadow: 1px 0 black;

  text-align: center;
  font-size: 28px;
`;
export const Text = styled.p`
  color: black;

  text-align: center;
  font-size: 18px;
`;
export const ListMovies = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
export const ItemMovies = styled.li``;

export const LinkMovies = styled(NavLink)`
  font-size: 26px;
  text-decoration: none;
  color: white;
  &.active {
    color: orange;
  }

  &:hover {
    color: orange;
  }
`;
