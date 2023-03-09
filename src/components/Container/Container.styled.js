import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 210px;
    padding-right: 210px;
  }
`;
