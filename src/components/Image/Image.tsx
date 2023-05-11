import React, { useEffect, useState, useRef } from 'react';

import { styled } from '@mui/material/styles';
import imageStyles from './ImageStyles';

type OptionsProps = {
  className?: string;
  src: string;
};

const StyledImage = styled('img')<OptionsProps>(({ theme }) => imageStyles('konfio'));

const Options:React.FC<OptionsProps> = (props) => {

  const { 
    className,
    src
  } = props;

  const inputRef = useRef<any>(null);
  const [ state, setState ] = useState<boolean>(false);

  const scrollHandler = () => {
    const imageDistance = inputRef.current.getBoundingClientRect().y;
    if (window.innerHeight - imageDistance > 100) {
      setState(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);

  return (<StyledImage src={src} className={className + (state ? ' image-animation' : '')} ref={inputRef} />
  )
}

export default Options;