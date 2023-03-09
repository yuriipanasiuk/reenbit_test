import styled from 'styled-components';

export const Image = styled.img`
  margin-bottom: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.circle};
  border: ${p => p.theme.borders.imageBorder};
`;

export const Name = styled.p`
  margin-bottom: 48px;
  font-weight: ${p => p.theme.fontWeight.normal};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.17;

  color: ${p => p.theme.colors.detailName};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxl};
    line-height: 1.17;
  }
`;

export const Title = styled.p`
  margin-bottom: 48px;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.2;

  letter-spacing: 0.15px;

  color: ${p => p.theme.colors.titleColor};
`;

export const InformTitle = styled.p`
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.5;

  letter-spacing: 0.15px;

  color: ${p => p.theme.colors.detailName};
`;

export const Item = styled.li`
  padding-top: 9px;
  padding-bottom: 12px;
  font-weight: ${p => p.theme.fontWeight.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.43;

  letter-spacing: 0.25px;

  color: ${p => p.theme.colors.itemColor};

  border-bottom: ${p => p.theme.borders.infoBorder};
  mix-blend-mode: normal;
`;

export const InformationWraper = styled.div`
  width: 220px;

  @media screen and (min-width: 768px) {
    width: 413px;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
