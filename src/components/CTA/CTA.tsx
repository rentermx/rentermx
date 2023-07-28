import React from "react";
import { styled } from '@mui/material/styles';
import ctaStyles from './CTAStyles';
// import bgImg from '../../images/doctor-wallpaper.jpg';
import bgImg from '../../images/rentermx-wallpaper.jpeg';
import Button from "../Button/Button";

type CTAProps = {

};

const StyledCTA = styled('section')(({ theme }) => ctaStyles('konfio'));

const CTA: React.FC<CTAProps> = () => (
  <StyledCTA className='flex justify-center items-center leading-[3rem] md:leading-[unset] mx-8 sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col rounded-[20px] box-shadow'>
    <div className="flex-1 flex flex-col">
      <h2 className='font-semibold xs:text-[48px] text-[40px] text-white leading-[3rem] md:leading-[unset] w-full'>Prueba nuestro servicio ya!</h2>
      <p className='text-white font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
        Todo lo que necesitas para llevar a tu negocio al siguiente nivel.
      </p>
    </div>

    <div className='flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10'>
      <Button href="/location" className="hidden lg:inline-block">
        Quiero ser cliente
      </Button>
    </div>
  </StyledCTA>
);

export default CTA;