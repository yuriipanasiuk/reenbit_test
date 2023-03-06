import styled from 'styled-components';
import bgImg from '../../image/bg.png';

export const ImageWraper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  width: 600px;
  height: 200px;

  background-image: url(${bgImg});
  background-size: contain;
  background-repeat: no-repeat;
`;
