import styled from 'styled-components';

export const ChatacterItem = styled.li`
  background: ${p => p.theme.colors.white};

  box-shadow: ${p => p.theme.shadows.cardShadow};
  border-radius: ${p => p.theme.radii.normal};

  transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;

  :hover {
    scale: 1.02;
  }
`;

export const CharacterImg = styled.img`
  width: 240px;
  height: 170px;
`;

export const TextWraper = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Name = styled.p`
  margin-bottom: 1px;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.5;
  letter-spacing: 0.15px;

  color: ${p => p.theme.colors.nameColor};
`;

export const Spec = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: ${p => p.theme.colors.specColor};
`;
