import { Opacity } from "@mui/icons-material";
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
  black: '#212121',
  title: '#212121',
  text: '#474747'
}

const styles = (variant: 'konfio' | 'strive') => ({
  strive: {

  },
  konfio: {
    transition: 'opacity 1s ease-in-out',
    opacity: 0,
    '&.image-animation': {
      opacity: 1
    }
  }
});

const imageStyles: any = (variant: 'strive' | 'konfio', theme?: Theme) => (styles(variant)[variant]);

export default imageStyles;