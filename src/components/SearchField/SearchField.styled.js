import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const Form = styled.form`
  position: relative;

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

  @media screen and (min-width: 320px) {
    max-width: 668px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1020px;
  }

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
`;
