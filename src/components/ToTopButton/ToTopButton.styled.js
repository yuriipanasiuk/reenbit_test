import styled from 'styled-components';
import { FaArrowAltCircleUp } from 'react-icons/fa';

export const Button = styled.button`
  position: fixed;
  right: 20px;
  bottom: 100px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Icon = styled(FaArrowAltCircleUp)`
  opacity: 0.3;
  color: ${p => p.theme.colors.topButton};
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    opacity: 1;
    scale: 1.2;
  }
`;
