import React from "react";
import { styled } from '@mui/material/styles';
import heroStyles from './HeroStyles';
import bgImg from '../../images/doctor-wallpaper.jpg';

type HeroProps = {

};

const StyledHero = styled('footer')(({ theme }) => heroStyles('konfio'));

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="bg-white">
      <div style={{
        width: "100%",
        height: "100vh",
        position: 'relative'
      }}>
          <img src={bgImg} style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 0
          }}></img>
      </div>
    </section>
  );
};

export default Hero;