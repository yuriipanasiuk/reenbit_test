import styled from 'styled-components';
import bgImg from '../../image/bg.png';

export const ImageWraper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  width: 220px;
  height: 80px;

  background-image: url(${bgImg});
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (min-width: 568px) {
    width: 300px;
    height: 100px;
  }

  @media screen and (min-width: 768px) {
    width: 600px;
    height: 200px;
  }
`;
