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
    backgroundColor: 'rgb(245 245 245)',
    marginTop: '1rem',
    marginBottom: '1rem',
    display: 'flex',
    width: '70%',
    marginLeft: '1rem',
    marginRight: '1rem',
    borderRadius: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    flexDirection: 'column',
    transition: 'box-shadow 0.5s',
    '&:hover':{
      boxShadow: `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px`
    },
    '& .option': {
      backgroundColor: 'transparent',
      width: '130px',
      height: '130px',
      padding: '4rem 2rem 2rem 2rem',
      margin: '0 auto',
      transition: 'color 0.2s ease-in-out',
      '&.hover-class': {
        color: colors[variant].main
      }
    },
    '& .option-card-title': {
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '1.4rem',
      textAlign: 'center',
      color: baseColors.text
    },
    '& .MuiSvgIcon-root': {
      color: baseColors.title
    },
    '& .option-card-subtitle': {
      textAlign: 'center',
      color: baseColors.text,
      fontWeight: '300',
      padding: '0 0 2rem 0'
    },
    '@media (min-width: 640px)': {
      width: '33%'
    },
    '@media (min-width: 768px)': {
      width: '28%',
    },
    '@media (min-width: 1024px)':{
      marginTop: '8rem',
      marginBottom: '8rem',
    }
  },
  konfio: {
    backgroundColor: 'rgb(245 245 245)',
    marginTop: '1rem',
    marginBottom: '1rem',
    display: 'flex',
    width: '70%',
    marginLeft: '1rem',
    marginRight: '1rem',
    borderRadius: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    flexDirection: 'column',
    border: '3px solid white',
    transition: 'border 0.5s',
    '&:hover':{
      border: `3px solid ${colors[variant].main}`
    },
    '& .option': {
      backgroundColor: 'transparent',
      width: '130px',
      height: '130px',
      padding: '4rem 2rem',
      margin: '0 auto',
      transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
      '&.hover-class': {
        transform: 'scale(1.2)',
        color: colors[variant].main
      }
    },
    '& .option-card-title': {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1.4rem',
      textAlign: 'center',
      color: baseColors.text
    },
    '& .MuiSvgIcon-root': {
      color: baseColors.title
    },
    '& .option-card-subtitle': {
      textAlign: 'center',
      color: baseColors.text,
      fontWeight: '300'
    },
    '@media (min-width: 640px)': {
      width: '50%'
    },
    '@media (min-width: 768px)': {
      width: '80%',
    },
    '@media (min-width: 1024px)':{
      marginTop: '8rem',
      marginBottom: '8rem',
    }
  
  }
});

const optionsStyles: any = (variant: 'strive' | 'konfio', theme?: Theme) => (styles(variant)[variant]);

export default optionsStyles;