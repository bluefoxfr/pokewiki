import React, { FunctionComponent } from 'react';
import { InputContainer, InputUser } from './Input.style';

type InputProps = {
  keyPress: (e: any) => void;
}

export const Input: FunctionComponent<InputProps> = ({keyPress, ...props}) => {

  const inputCss = {
    background: 'none',
    borderRadius: '50px',
    border: "3px solid #F4F4F4",
    color:' #F4F4F4',
    padding: '30px 30px',
    width: '100%',
    fontSize: '25px',
    outline: 'none',
  }
  return (
    <InputContainer {...props} >
      <InputUser onChange={keyPress} placeholder={'Search...'} />
    </InputContainer>
  )
};