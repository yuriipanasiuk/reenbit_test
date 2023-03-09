import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: ${p => p.theme.borders.headerBorder};
  box-shadow: ${p => p.theme.shadows.shadow};
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1440px;
  padding-left: 210px;
  padding-right: 210px;
  margin-left: auto;
  margin-right: auto;
`;
