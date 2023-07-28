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
    backgroundColor: colors[variant].main
  },
  konfio: {
    backgroundColor: colors[variant].main
  }
})

const ctaStyles: any = (variant: 'strive' | 'konfio', theme?: Theme) => (styles(variant)[variant]);

export default ctaStyles;