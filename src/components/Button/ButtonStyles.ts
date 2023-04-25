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

const buttonStyles = (variant: 'strive' | 'konfio', theme?: Theme) => ({
  '& .MuiButtonBase-root': {
    textTransform: 'none'
  },
  backgroundColor: colors[variant].main,
  padding: '10px 2rem !important',
  fontWeight: 600,
  fontSize: '0.875rem',
  borderRadius: '25px',
  border: `2px solid ${colors[variant].main}`,
  color: baseColors.white,
  '&:hover': {
    backgroundColor: colors[variant].hover,
    border: `2px solid ${colors[variant].hover}`
  }
});

export default buttonStyles;