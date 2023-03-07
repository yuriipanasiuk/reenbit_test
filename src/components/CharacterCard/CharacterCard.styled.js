import styled from 'styled-components';

export const Image = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 16px;
  border-radius: 50%;
  border: 5px solid #f2f2f7;
`;

export const Name = styled.p`
  margin-bottom: 48px;
  font-weight: 400;
  font-size: 48px;
  line-height: 1.17;

  color: ${p => p.theme.colors.detailName};
`;

export const Title = styled.p`
  margin-bottom: 48px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;

  letter-spacing: 0.15px;

  color: ${p => p.theme.colors.titleColor};
`;

export const InformTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;

  letter-spacing: 0.15px;

  color: ${p => p.theme.colors.detailName};
`;

export const Item = styled.li`
  padding-top: 9px;
  padding-bottom: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;

  letter-spacing: 0.25px;

  color: ${p => p.theme.colors.itemColor};

  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
  mix-blend-mode: normal;
`;

export const InformationWraper = styled.div`
  width: 413px;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
