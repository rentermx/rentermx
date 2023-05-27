import React from 'react';
import { default as MuiInput, TextFieldProps as MuiInputProps } from '@mui/material/TextField';

import { styled } from '@mui/material/styles';
import inputStyles from './InputStyles';

type InputProps = Omit<{} & MuiInputProps, 'variant'>

const StyledInput = styled(MuiInput)<MuiInputProps>(({ theme }) => inputStyles('konfio'));

const Input:React.FC<InputProps> = (props: InputProps) => {
  // @ts-ignore
  delete props.variant;

  const { ...muiProps } = props;
  return (
    <StyledInput {...muiProps} />
  )
}

export default Input;