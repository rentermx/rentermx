import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Options from '../components/Options/Options';
import Carousel from '../components/Carousel/Carousel';
import CTA from '../components/CTA/CTA';
import Benefits from '../components/Benefits/Benefits';
import Footer from '../components/Footer/Footer';

type HomeProps = {}

const Home:React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Options />
      <CTA />
      <Benefits />
      <Footer />
    </Fragment>
  )
}

export default Home;