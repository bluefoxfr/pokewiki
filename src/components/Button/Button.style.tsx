import styled from 'styled-components';

export const ButtonContainer = styled.button<{disabled: boolean | undefined}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 3px solid #F4F4F4;
  color: #F4F4F4;
  border-radius: 20px;
  &:active {
    border: 3px solid #9E9E9E;
    color: #9E9E9E;
  }
  cursor: pointer;
  padding: 0 70px;
  width: 100px;
`;

export const Text = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;