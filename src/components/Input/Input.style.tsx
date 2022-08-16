import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
`;

export const InputUser = styled.input`
  background: none;
  border-radius: 50px;
  border: 3px solid #F4F4F4;
  color: #F4F4F4;
  padding: 30px 30px;
  width: 100%;
  font-size: 25px;
  &:focus {
    outline: none;
  }
`;