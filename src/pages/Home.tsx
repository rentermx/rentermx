import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Options from '../components/Options/Options';
import Benefits from '../components/Benefits/Benefits';
import Footer from '../components/Footer/Footer';
import bgImg from '../images/doctor-wallpaper.jpg';

type HomeProps = {}

const Home:React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <Fragment>
      <Navbar />
      <div id="bg-div" style={{
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
          right: 0
        }}></img>
      </div>
      <Options></Options>
      <Benefits></Benefits>
      <Footer></Footer>
    </Fragment>
  )
}

export default Home;