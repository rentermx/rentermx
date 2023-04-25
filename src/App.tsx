import React, { Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div id="bg-div" style={{
        backgroundColor: "gray",
        width: "100vw",
        height: "100vh"
      }} />
    </Fragment>
  );
}

export default App;
