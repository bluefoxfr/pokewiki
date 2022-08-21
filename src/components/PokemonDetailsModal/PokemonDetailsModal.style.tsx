import styled from 'styled-components';
import { Button as _Button } from '../Button';

export const DarkBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background: rgba(18, 18, 18, 0.9);
  justify-content: space-between;
  align-content: center;
`;

export const Pokename = styled.h1`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 75px;
  display: flex;
  color: #F4F4F4;
`;

export const TopElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Sprite = styled.img`
  width: 256px;
  height: 256px;
  margin: 0 100px;
`;

export const Button = styled(_Button)`
  margin: 10px 0;
`;

export const DisplayPokemon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  perspective: 1000px;
`;

export const PillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const SubStats = styled.div`
  display: flex;
  flex-direction: column;
  transform: rotateY(50deg);
  transition: 0.3s;
  &:hover {
    transform: rotateY(0deg);
    transition: 0.3s;
  }
  min-width: 200px;
`;

export const SubStatsRight = styled.div`
  display: flex;
  flex-direction: column;
  transform: rotateY(-50deg);
  transition: 0.3s;
  &:hover {
    transform: rotateY(0deg);
    transition: 0.3s;
  }
  min-width: 200px;
`;

export const SubStatHeader = styled.h1`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 75px;
  display: flex;
  color: #F4F4F4;
  margin: 0;
`;

export const SubStat = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 75px;
  color: #F4F4F4;
`;

export const TextSub = styled.h1`
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 75px;
color: #F4F4F4;
margin: 0;
`;

export const HeadSub = styled.h1`
font-family: 'Work Sans';
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 75px;
display: flex;
color: #F4F4F4;
margin-right: 10px;
`;
