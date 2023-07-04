import React, { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import optionsStyles from './OptionsStyles';

import StarIcon from '@mui/icons-material/Star';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

type OptionsProps = {};

const StyledCard = styled('div')<OptionsProps>(({ theme }) => optionsStyles('konfio'));

const Options:React.FC<OptionsProps> = (props) => {
  const [ state, setState ] = useState(-1);

  const handleMouseEnter = (idx: number) => {
    setState(idx);
  };

  const handleMouseLeave = (idx: number) => {
    setState(idx);
  };

  return (
    <section className='flex flex-col items-center' id="options-section">
      <div className='container mt-[2rem] lg:mt-[8rem] text-4xl lg:text-6xl font-semibold text-center mb-[4rem] lg:mb-[1rem]'>¡Lleva tu negocio al siguiente nivel!</div>
      <div className="container flex flex-col items-center justify-center lg:items-stretch lg:flex-row">
        <StyledCard onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(-1)}>
          <StarIcon className={'option ' + (state === 0 ? 'hover-class' : '')} />
          <div className='option-card-title'>Calidad</div>
          <div className='option-card-subtitle'>Creado bajo los estandares mas altos de calidad.</div>
        </StyledCard>
        <StyledCard onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(-1)}>
          <ElectricBoltIcon className={'option ' + (state === 1 ? 'hover-class' : '')} />
          <div className='option-card-title'>Rapidez</div>
          <div className='option-card-subtitle'>Obtén tu sitio web en tiempo record.</div>
        </StyledCard>
        <StyledCard onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(-1)}>
          <EmojiPeopleIcon className={'option ' + (state === 2 ? 'hover-class' : '')} />
          <div className='option-card-title'>Atención personalizada</div>
          <div className='option-card-subtitle'>Nuestro servicio al cliente siempre a tu disposición.</div>
        </StyledCard>
      </div>
    </section>
  )
}

export default Options;