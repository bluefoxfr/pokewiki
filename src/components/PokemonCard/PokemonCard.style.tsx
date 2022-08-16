import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid #D9D9D9;
  border-radius: 10px;
  background: none;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 200px;
  height: 260px;
`;

export const Sprite = styled.img``;

export const PokeName = styled.h2`
  color: #D9D9D9;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
`;

export const TypesContainer = styled.div`
  display: flex;
  margin: 10px;
`;

export const SubStat = styled.h4`
  color: #D9D9D9;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  margin: 0 10px;
  text-align: center;
`;

export const TypePill = styled.div<{bgColor: string}>`
  display: flex;
  border-radius: 50px;
  border: 2px solid #F4F4F4;
  padding: 5px 10px;
  color: #ffffff;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  text-align: center;
  margin: 0 5px;
  ${({bgColor}) => bgColor !== 'none' ? `background-color: ${bgColor}; border: 2px solid ${bgColor};` : null}
`;