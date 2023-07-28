import React, { useState, useEffect } from 'react';
import { default as MuiCarousel } from 'react-simply-carousel';

import { styled } from '@mui/material/styles';
import carouselStyles from './CarouselStyles';
import optionsStyles from '../Options/OptionsStyles';

import StarIcon from '@mui/icons-material/Star';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type CarouselProps = {};

const StyledCarousel = styled('section')<CarouselProps>(({ theme }) => carouselStyles('konfio'));

const StyledCard = styled('div')<{}>(({ theme }) => optionsStyles('konfio'));

const Carousel:React.FC<CarouselProps> = (props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const [ state, setState ] = useState(-1);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);


  const handleMouseEnter = (idx: number) => {
    setState(idx);
  };

  const handleMouseLeave = (idx: number) => {
    setState(idx);
  };

  const isMobile = width <= 1024;

  return (
    <StyledCarousel className='flex flex-col items-center mb-16 lg:mb-56'>
      <div className='container mt-[2rem] lg:mt-[8rem] text-4xl lg:text-6xl font-semibold text-center mb-[2rem] lg:mb-[8rem]'>¡Lleva tu negocio al siguiente nivel!</div>
      <MuiCarousel
        containerProps={{
          className: "carousel-container"
        }}
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={isMobile ? 1 : 2}
        centerMode
        itemsToScroll={1}
        forwardBtnProps={{
          children: <KeyboardArrowRightIcon />,
          className: `${isMobile && 'hidden'} carousel-arrow carousel-right-arrow`
        }}
        backwardBtnProps={{
          children: <KeyboardArrowLeftIcon />,
          className: `${isMobile && 'hidden'} carousel-arrow carousel-left-arrow`
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            className: 'carousel-dots',
          },
          activeItemBtnProps: {
            className: 'carousel-dots carousel-active-dot'
          }
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 1,
            minWidth: 1024,
          },
        ]}
        speed={400}
        easing="ease-in-out"
      >
        <div className='w-[25rem] p-8 flex md:w-[35rem] lg:w-[25rem]'>
          <StyledCard className='!m-0 sm:!w-full' onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(-1)}>
            <StarIcon className={'option ' + (state === 0 ? 'hover-class' : '')} />
            <div className='option-card-title'>Calidad</div>
            <div className='option-card-subtitle'>Creado bajo los estandares mas altos de calidad.</div>
          </StyledCard>
        </div>
        <div className='w-[25rem] p-8 flex md:w-[35rem] lg:w-[25rem]'>
          <StyledCard className='!m-0' onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(-1)}>
            <ElectricBoltIcon className={'option ' + (state === 1 ? 'hover-class' : '')} />
            <div className='option-card-title'>Rapidez</div>
            <div className='option-card-subtitle'>Obtén tu sitio web en tiempo record.</div>
          </StyledCard>
        </div>
        <div className='w-[25rem] p-8 flex md:w-[35rem] lg:w-[25rem]'>
          <StyledCard className='!m-0' onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(-1)}>
            <EmojiPeopleIcon className={'option ' + (state === 2 ? 'hover-class' : '')} />
            <div className='option-card-title'>Atención personalizada</div>
            <div className='option-card-subtitle'>Nuestro servicio al cliente siempre a tu disposición.</div>
          </StyledCard>
        </div>
      </MuiCarousel>
    </StyledCarousel>
  )
}

export default Carousel;