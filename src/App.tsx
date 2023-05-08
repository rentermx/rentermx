import React, { Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import Options from './components/Options/Options';
import Footer from './components/Footer/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bgImg from './images/doctor-wallpaper.jpg';

const theme = createTheme({
  typography: {
    fontFamily: 'Gilroy'
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
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
        <Footer></Footer>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
