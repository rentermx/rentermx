import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Options from '../components/Options/Options';
import Benefits from '../components/Benefits/Benefits';
import Footer from '../components/Footer/Footer';
import bgImg from '../images/doctor-wallpaper.jpg';

type HomeProps = {}

const Home:React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Options></Options>
      <Benefits></Benefits>
      <Footer></Footer>
    </Fragment>
  )
}

export default Home;