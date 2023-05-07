import React, { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import optionsStyles from './OptionsStyles';

import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

type OptionsProps = {};

const StyledAppBar = styled('div')<OptionsProps>(({ theme }) => optionsStyles('konfio'));

const Options:React.FC<OptionsProps> = (props) => {
  const [ state, setState ] = useState(-1);

  const handleMouseEnter = (idx: number) => {
    setState(idx);
  };

  const handleMouseLeave = (idx: number) => {
    setState(idx);
  };

  return (
    <section className='flex flex-col items-center'>
      <div className='mt-[8rem] text-6xl font-semibold'>Todo lo que buscas lo encuentras aquí</div>
      <div className="container flex flex-col items-center justify-center lg:items-stretch lg:flex-row">
        <StyledAppBar onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(-1)}>
          <HealthAndSafetyIcon className={'option ' + (state === 0 ? 'hover-class' : '')} />
          <div className='option-card-title'>Seguro de vida</div>
          <div className='option-card-subtitle'>Sientete protegido a donde sea que vayas.</div>
        </StyledAppBar>
        <StyledAppBar onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(-1)}>
          <DirectionsRunIcon className={'option ' + (state === 1 ? 'hover-class' : '')} />
          <div className='option-card-title'>Atención prioritaria</div>
          <div className='option-card-subtitle'>Recibe atencion especializada y resuelve todas tus dudas.</div>
        </StyledAppBar>
        <StyledAppBar onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(-1)}>
          <AccessTimeFilledIcon className={'option ' + (state === 2 ? 'hover-class' : '')} />
          <div className='option-card-title'>Servicio las 24h</div>
          <div className='option-card-subtitle'>Nuestro servicio al cliente siempre a tu disposición.</div>
        </StyledAppBar>
      </div>
    </section>
  )
}

export default Options;