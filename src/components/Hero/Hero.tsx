import React from "react";
import { styled } from '@mui/material/styles';
import heroStyles from './HeroStyles';
// import bgImg from '../../images/doctor-wallpaper.jpg';
import bgImg from '../../images/rentermx-wallpaper.jpeg';
import Button from "../Button/Button";

type HeroProps = {

};

const StyledHero = styled('section')(({ theme }) => heroStyles('strive'));

const Hero: React.FC<HeroProps> = () => {
  return (
    <StyledHero>
      <img src={bgImg} className="hero-img"/>
      <div className="hero-container">
        <div className="hero-text">
          <div className="hero-title">
            <span>Crea tú sitio web </span><br/><span className="hero-highlighted-text"> sin límites</span>
          </div>
          <div className="hero-subtitle">
            Súbete a la era digital de forma sencilla y sin complicaciones.
            Adquiere tu página web sin gastar una fortuna y dale a tu negocio el impulso que necesita.
          </div>
          <Button href="/location">
            Quiero ser cliente
          </Button>  
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;