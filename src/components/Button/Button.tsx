import React from 'react';
import { default as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import buttonStyles from './ButtonStyles';

type ButtonProps = Omit<{} & MuiButtonProps, 'variant'>

const StyledButton = styled(MuiButton)<MuiButtonProps>(({ theme }) => buttonStyles('konfio'));

const Button:React.FC<ButtonProps> = (props: ButtonProps) => {
  // @ts-ignore
  delete props.variant;

  const { children, ...muiProps } = props;
  return (
    <StyledButton {...muiProps}>{children}</StyledButton>
  )
}

export default Button;