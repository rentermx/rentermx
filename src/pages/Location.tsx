import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Map from '../components/Map/Map';

type LocationProps = {}

const Location:React.FC<LocationProps> = (props: LocationProps) => {
  return (
    <Fragment>
      <Navbar />
      <Map />
      <Footer />
    </Fragment>
  )
}

export default Location;