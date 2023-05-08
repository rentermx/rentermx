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
    '& .footer-links-section': {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      padding: '3rem 4rem',
      gap: '1.5rem',
    },
    '& .footer-link-title': {
      color: baseColors.text,
      marginBottom: '1rem',
      fontWeight: 600
    },
    '& .footer-text': {
      color: baseColors.text,
      marginBottom: '0.5rem'
    },
    '& .footer-link': {
      color: baseColors.text,
      marginBottom: '0.5rem',
      listStyle: 'none',
      cursor: 'pointer',
      '&:hover': {
        color: colors[variant].hover
      }
    },
    '& .footer-policy-section': {
      display: 'grid',
      gap: '2.5rem',
      textAlign: 'center',
      paddingTop: '0.5rem',
      paddingBottom: '2rem',
      color: baseColors.text,
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    },
    '& .footer-media-button': {
      padding: '0.5rem',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: '9999px',
      margin: '0.75rem 0',
      transition: '0.1s ease-in-out',
      '&:hover': {
        backgroundColor: colors.konfio.hover,
        color: baseColors.text
      }
    },
    '@media (min-width: 640px)': {
      padding: '3rem 0',
      '& .footer-links-section': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        paddingTop: '2rem',
        paddingBottom: '2rem',
      },
      '& .footer-policy-section': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      }
    },
    '@media (min-width: 768px)': {
    },
    '@media (min-width: 1024px)':{
      '& .footer-links-section': {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        marginTop: '2rem',
        marginBottom: '2rem',
      },
      '& .footer-policy-section': {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      }
    }
  },
});

const footerStyles: any = (variant: 'strive' | 'konfio', theme?: Theme) => (styles(variant)[variant]);

export default footerStyles;