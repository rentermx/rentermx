import React from 'react';
import { styled } from '@mui/material/styles';
import mobileButtonStyles from './MobileButtonStyles';


type MobileButtonProps = {
  children?: React.ReactNode;
  className: string;
}

const MobileButtonStyles = styled('a')<MobileButtonProps>(({ theme }) => mobileButtonStyles('konfio'));

const MobileButton:React.FC<MobileButtonProps & React.HTMLProps<HTMLAnchorElement>> = (props) => {
  const {
    children,
    className,
    href
  } = props;

  return (
    <MobileButtonStyles className={className} href={href}>{children}</MobileButtonStyles>
  )
}

export default MobileButton;