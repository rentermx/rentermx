import { Theme } from "@mui/material";

const colors = {
  strive: {
    main: '#00a0bb',
    hover: '#162c50'
  },
  konfio: {
    main: '#6e43b7',
    hover: '#9879cd'
  }
}

const baseColors = {
  white: '#fff',
  black: '#212121'
}

const styles = (variant: 'konfio' | 'strive') => ({
  strive: {
    height: "100%",
    '& > div > div': {
      position: 'relative'
    },
    '& > div > div::after': {
      content: '""'
    },
    '& .carousel-arrow': {
      backgroundColor: colors[variant].main,
      alignSelf: 'center',
      padding: 0,
      border: 'none',
      height: '24px',
      width: '24px',
      borderRadius: '50%',
      color: 'white',
      cursor: 'pointer',
    },
    '& .carousel-left-arrow': {
      marginRight: '0'
    },
    '& .carousel-right-arrow': {
      marginLeft: '0'
    },
    '& .carousel-dots': {
      height: 16,
      width: 16,
      borderRadius: "50%",
      border: 0,
      margin: '0 0.5rem'
    },
    '& .carousel-active-dot': {
      backgroundColor: colors[variant].main
    },
    '@media (min-width: 768px)': {
      '& .carousel-left-arrow': {
        marginRight: '3rem'
      },
      '& .carousel-right-arrow': {
        marginLeft: '3rem'
      }
    },
    '@media (min-width: 1024px)':{
      '& > div > div::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 100%)',
        pointerEvents: 'none'
      }
    }
  },
  konfio: {
    height: "100%",
    '& > div > div': {
      position: 'relative'
    },
    '& > div > div::after': {
      content: '""'
    },
    '& .carousel-arrow': {
      backgroundColor: colors[variant].main,
      alignSelf: 'center',
      padding: 0,
      border: 'none',
      height: '24px',
      width: '24px',
      borderRadius: '50%',
      color: 'white',
      cursor: 'pointer',
    },
    '& .carousel-left-arrow': {
      marginRight: '0'
    },
    '& .carousel-right-arrow': {
      marginLeft: '0'
    },
    '& .carousel-dots': {
      height: 16,
      width: 16,
      borderRadius: "50%",
      border: 0,
      margin: '0 0.5rem'
    },
    '& .carousel-active-dot': {
      backgroundColor: colors[variant].main
    },
    '@media (min-width: 768px)': {
      '& .carousel-left-arrow': {
        marginRight: '3rem'
      },
      '& .carousel-right-arrow': {
        marginLeft: '3rem'
      }
    },
    '@media (min-width: 1024px)':{
      '& > div > div::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 100%)',
        pointerEvents: 'none'
      }
    }
  }
})

const carouselStyles: any = (variant: 'strive' | 'konfio', theme?: Theme) => (styles(variant)[variant]);

export default carouselStyles;