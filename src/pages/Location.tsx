import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Options from '../components/Options/Options';
import Benefits from '../components/Benefits/Benefits';
import Footer from '../components/Footer/Footer';

type LocationProps = {}

const Location:React.FC<LocationProps> = (props: LocationProps) => {
  return (
    <Fragment>
      <Navbar />
      <Footer></Footer>
    </Fragment>
  )
}

export default Location;