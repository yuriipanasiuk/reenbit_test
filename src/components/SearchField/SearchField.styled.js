import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const Form = styled.form`
  position: relative;
  width: 1020px;
  margin-bottom: 56px;
`;

export const Input = styled.input`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 48px;
  outline: none;

  border: ${p => p.theme.borders.input};
  border-radius: ${p => p.theme.radii.medium};

  ::placeholder {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.5;

    color: ${p => p.theme.colors.placeholderColor};
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  color: ${p => p.theme.colors.searchBtnColor};

  position: absolute;
  top: 12px;
  left: 16px;
  border: none;
  background-color: transparent;
  padding: 0;

  cursor: pointer;

  transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    scale: 1.2;
  }
`;
