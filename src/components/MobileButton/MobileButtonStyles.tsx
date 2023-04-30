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

const mobileButtonStyles = (variant: 'strive' | 'konfio', theme?: Theme) => ({
  '& .MuiButtonBase-root': {
    textTransform: 'none'
  },
  textDecoration: 'underline',
  fontWeight: 600,
  fontSize: '0.875rem',
  color: colors[variant].main
});

export default mobileButtonStyles;