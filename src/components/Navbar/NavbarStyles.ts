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
    backgroundColor: 'transparent',
    position: 'fixed',
    boxShadow: 'none',
    zIndex: 1000,
    color: baseColors.white,
    transition:  '0.32s ease-in-out',
    '& .MuiButtonBase-root': {
      textTransform: 'none'
    },
    '& .MuiButtonBase-root#navbar-menu-button': {
      fontWeight: 300,
      color: baseColors.white,
      '&:hover': {
        backgroundColor: colors[variant].hover,
        color: baseColors.white
      }
    },
    '& #navbar-logo-container': {
      marginRight: '2rem',
      fontWeight: 200,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
    },
    '&.scrolled': {
      backgroundColor: 'white',
      boxShadow: '0 0 28px hsla(0,0%,50%,.5)',
      padding: '3px 0',
      color: baseColors.white,
      '& .MuiButtonBase-root#navbar-menu-button': {
        color: baseColors.black
      },
      '& #navbar-logo-container': {
        color: baseColors.black
      },
    }
  },
  konfio: {
    backgroundColor: 'transparent',
    position: 'fixed',
    boxShadow: 'none',
    zIndex: 1000,
    color: baseColors.black,
    transition:  '0.32s ease-in-out',
    '& .MuiButtonBase-root': {
      textTransform: 'none'
    },
    '& .MuiButtonBase-root#navbar-menu-button': {
      fontWeight: 300,
      color: baseColors.black,
      '&:hover': {
        backgroundColor: colors[variant].hover,
      }
    },
    '& #navbar-logo-container': {
      marginRight: '2rem',
      fontWeight: 200,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
    },
    '&.scrolled': {
      backgroundColor: 'white',
      boxShadow: '0 0 28px hsla(0,0%,50%,.5)',
      padding: '3px 0'
    }
  }
})

const navbarStyles: any = (variant: 'strive' | 'konfio', theme?: Theme) => (styles(variant)[variant]);

export default navbarStyles;