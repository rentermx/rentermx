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

const navbarStyles = (variant: 'strive' | 'konfio', theme?: Theme): any => ({
  backgroundColor: 'transparent',
  position: 'fixed',
  boxShadow: 'none',
  '& .MuiButtonBase-root': {
    textTransform: 'none'
  },
  '& .MuiButtonBase-root#navbar-menu-button': {
    color: baseColors.white,
    '&:hover': {
      backgroundColor: colors[variant].hover,
    }
  },
  '& #navbar-logo-container': {
    marginRight: '2rem',
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
  },
  '@media (min-width: 1300px)': {
    '& #navbar-logo-container': {
      backgroundColor: 'blue',
    },
    
  }

});

export default navbarStyles;