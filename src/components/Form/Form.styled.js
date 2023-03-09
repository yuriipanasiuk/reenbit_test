import styled from 'styled-components';
import { Link as StyledLink } from 'react-router-dom';

export const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${p => p.theme.colors.bg};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 620px;
  border-radius: ${p => p.theme.radii.big};
  padding-top: 60px;
  padding-bottom: 60px;

  @media screen and (min-width: 768px) {
    background-color: ${p => p.theme.colors.white};
  }
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
  text-align: center;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.xsl};
  line-height: 1.36;

  letter-spacing: 0.04em;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 280px;
  margin-bottom: ${p => p.theme.space[4]}px;

  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 32px;

  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.39rem;
  letter-spacing: 0.04em;
  background-color: ${p => p.theme.colors.bg};
  color: ${p => p.theme.colors.black};
  outline: none;
  border: ${p => p.theme.borders.inputLogin};
  border-radius: ${p => p.theme.radii.big};

  @media screen and (min-width: 425px) {
    width: 330px;
  }

  @media screen and (min-width: 768px) {
    width: 458px;
  }

  ::placeholder {
    color: ${p => p.theme.colors.formPlaceholder};
  }

  :focus {
    border: 2px solid #ff6101;
  }
`;

export const Button = styled.button`
  width: 280px;
  height: 48px;
  margin-bottom: ${p => p.theme.space[4]}px;

  background-color: ${p => p.theme.colors.btnRegBg};
  border-radius: ${p => p.theme.radii.big};

  outline: none;
  border: none;

  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.35;
  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.white};

  cursor: pointer;

  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  @media screen and (min-width: 425px) {
    width: 330px;
  }

  @media screen and (min-width: 768px) {
    width: 458px;
  }

  :hover {
    border: ${p => p.theme.borders.regButtonBorder};
    background-color: transparent;
    color: ${p => p.theme.colors.black};
  }
`;

export const LinkText = styled.p`
  color: ${p => p.theme.colors.linkTextColor};
`;

export const Link = styled(StyledLink)`
  color: ${p => p.theme.colors.redirectLink};
  margin-left: ${p => p.theme.space[3]}px;

  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    color: ${p => p.theme.colors.redirectLinkHover};
  }
`;
