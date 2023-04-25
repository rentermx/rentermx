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
  }

});

export default navbarStyles;