import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  display: flex;
  color: white;
  margin: 20px;
  &:hover {
    color: orange;
  }
`;
