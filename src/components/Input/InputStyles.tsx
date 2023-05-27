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
    '& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: colors[variant].main
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: colors[variant].main
    }
  },
  konfio: {
    '& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: colors[variant].main
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: colors[variant].main
    }
  }
})

const inputStyles: any = (variant: 'strive' | 'konfio', theme?: Theme) => (styles(variant)[variant]);

export default inputStyles;