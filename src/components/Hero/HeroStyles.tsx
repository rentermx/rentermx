import { Theme } from "@mui/material";

const colors = {
  strive: {
    main: '#00a0bb',
    hover: '#162c50'
  },
  konfio: {
    main: '#6e43b7',
    hover: '#9879cd'
  },
  clip: {
    main: '#6e43b7',
    hover: '#9879cd'
  }
}

const baseColors = {
  white: '#fff',
  black: '#212121',
  title: '#212121',
  text: '#474747'
}

const styles = (variant: 'konfio' | 'strive' | 'clip') => ({
  strive: {
    backgroundColor: baseColors.white,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    '& .hero-img': {
      height: '50%',
      backgroundPosition: 'center',
      objectFit: 'cover',
      width: '100'
    },
    '& .hero-container': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    },
    '& .hero-text': {
      maxWidth: '768px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '& .hero-title': {
      fontSize: '1.875rem',
      lineHeight: '2.25rem',
      textAlign: 'center',
      marginBottom: '1rem',
    },
    '& .hero-subtitle': {
      fontWeight: '300',
      textAlign: 'center',
      marginBottom: '2rem'
    },
    '& .hero-highlighted-text': {
      color: colors[variant].main
    },
    '@media (min-width: 640px)': {
      
    },
    '@media (min-width: 768px)': {
      '& .hero-img': {
        height: '60%'
      },
      '& .hero-title': {
        fontSize: '2.25rem',
        lineHeight: '2.5rem',
      }
    },
    '@media (min-width: 1024px)':{
      flexDirection: 'row',
      '& .hero-img': {
        height: '100vh',
        width: '60%'
      },
      '& .hero-text': {
        maxWidth: '24rem'
      },
    }
  },
  konfio: {
    backgroundColor: baseColors.white,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    '& .hero-img': {
      height: '50%',
      backgroundPosition: 'center',
      objectFit: 'cover',
      width: '100'
    },
    '& .hero-container': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    },
    '& .hero-text': {
      maxWidth: '768px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '& .hero-title': {
      fontSize: '1.875rem',
      lineHeight: '2.25rem',
      textAlign: 'center',
      marginBottom: '1rem',
    },
    '& .hero-subtitle': {
      fontWeight: '300',
      textAlign: 'center',
      marginBottom: '2rem'
    },
    '& .hero-highlighted-text': {
      color: colors[variant].main
    },
    '@media (min-width: 640px)': {
      
    },
    '@media (min-width: 768px)': {
      flexDirection: 'row-reverse',
      '& .hero-img': {
        height: '100vh',
        width: '67%'
      },
      '& .hero-title': {
        fontSize: '2.25rem',
        lineHeight: '2.5rem'
      },
      '& .hero-container': {
        position: 'relative'
      },
      '& .hero-text': {
        padding: '4rem',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderRadius: '1rem',
        right: '-16rem',
        position: 'absolute',
        backgroundColor: baseColors.white,
        width: '22rem'
      }
    },
    '@media (min-width: 1024px)':{
      '& .hero-text': {
        right: '-10rem'
      }
    }
  },
  clip: {
    backgroundColor: baseColors.white,
    height: '100vh',
    width: '100%',
    position: 'relative',
    '& .hero-img': {
      height: '100%',
      position: 'absolute',
      objectFit: 'cover',
      width: '100%',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0'
    },
    '& .hero-container': {
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '& .hero-text': {
      maxWidth: '768px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '& .hero-title': {
      fontSize: '2.875rem',
      lineHeight: '2.875rem',
      textAlign: 'center',
      marginBottom: '3rem',
      color: baseColors.white
    },
    '& .hero-subtitle': {
      fontWeight: '300',
      fontSize: '1rem',
      textAlign: 'center',
      marginBottom: '3rem',
      color: baseColors.white,
      width: '80%'
    },
    '& .hero-highlighted-text': {
      color: colors[variant].main
    },
    '@media (min-width: 640px)': {
      '& .hero-title': {
        fontSize: '4rem',
        lineHeight: '4rem'
      },
      '& .hero-subtitle': {
        fontWeight: '300',
        fontSize: '1rem',
        width: '70%'
      }
    },
    '@media (min-width: 768px)': {
      '& .hero-title': {
        fontSize: '5rem',
        lineHeight: '5rem'
      },
      '& .hero-subtitle': {
        fontWeight: '300',
        fontSize: '1rem',
        width: '70%'
      }
    },
    '@media (min-width: 1024px)':{
      '& .hero-title': {
        fontSize: '6.875rem',
        lineHeight: '6rem'
      },
      '& .hero-subtitle': {
        fontWeight: '300',
        fontSize: '1.25rem'
      }
    }
  }
});

const heroStyles: any = (variant: 'strive' | 'konfio' | 'clip', theme?: Theme) => (styles(variant)[variant]);

export default heroStyles;