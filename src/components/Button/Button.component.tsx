import React, { FunctionComponent } from 'react';
import { ButtonContainer, Text } from './Button.style';

type ButtonProps = {
  name: string;
  disabled?: boolean;
  value: string;
  onPress: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button: FunctionComponent<ButtonProps> = ({
  name,
  disabled,
  value,
  onPress,
  ...props
}) => {
  return (
    <ButtonContainer name={name} {...props} disabled={disabled} onClick={onPress}>
      <Text>{value}</Text>
    </ButtonContainer>
  )
}