import styled from 'styled-components';
import { Link as StyledLink } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const BackIcon = styled(AiOutlineArrowLeft)`
  margin-right: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.black};
`;

export const TextLink = styled.p`
  font-family: 'Karla';

  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.17;

  color: ${p => p.theme.colors.black};
`;

export const Link = styled(StyledLink)`
  display: inline-flex;
  text-decoration: none;

  transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    scale: 1.02;
  }
`;
