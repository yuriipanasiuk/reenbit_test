import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  font-weight: 500;
  font-size: 38px;
  text-align: center;
`;

export const StyledLink = styled(NavLink)`
  font-size: 38px;
  color: #bc3838;
  text-decoration: none;
  :hover {
    color: orange;
    text-decoration: underline;
  }
`;
