import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 320px) {
    max-width: 767px;
  }

  @media screen and (min-width: 768px) {
    max-width: 1439px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
