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
`;
