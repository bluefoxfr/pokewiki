import styled from 'styled-components';

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