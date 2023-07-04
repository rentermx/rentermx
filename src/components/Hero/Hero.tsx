import React from "react";
import { styled } from '@mui/material/styles';
import heroStyles from './HeroStyles';
// import bgImg from '../../images/doctor-wallpaper.jpg';
import bgImg from '../../images/rentermx-wallpaper.jpeg';
import Button from "../Button/Button";

type HeroProps = {

};

const StyledHero = styled('footer')(({ theme }) => heroStyles('konfio'));

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="bg-white h-screen flex flex-col lg:flex-row">
      <img src={bgImg} className="h-1/2 bg-center object-cover w-screen md:h-[60%] lg:w-[60%] lg:h-screen"/>
      <div className="flex flex-col justify-center items-center p-8">
        <div className="max-w-screen-md flex flex-col justify-center items-center lg:max-w-sm">
          <div className="text-3xl text-center mb-4 md:text-4xl">
            <span>Crea tú sitio web </span><br/><span className="text-purple-700"> sin límites</span>
          </div>
          <div className="font-light text-center mb-8">
            Súbete a la era digital de forma sencilla y sin complicaciones.
            Adquiere tu página web sin gastar una fortuna y dale a tu negocio el impulso que necesita.
          </div>
          <Button href="/location">
            Quiero ser cliente
          </Button>  
        </div>
      </div>
    </section>
  );
};

export default Hero;