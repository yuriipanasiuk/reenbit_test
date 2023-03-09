import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.xll};
  text-align: center;
  padding-top: 200px;
`;

export const StyledLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.xll};
  color: #bc3838;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    color: orange;
    text-decoration: underline;
  }
`;

export const Wraper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${p => p.theme.colors.bg};
`;
