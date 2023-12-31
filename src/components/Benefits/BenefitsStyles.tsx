import { Theme } from "@mui/material";
import { color } from "@mui/system";

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '& .benefits-title': {
      textAlign: 'center',
      color: baseColors.black,
      fontWeight: 600,
      fontSize: '1.75rem',
      marginBottom: '4rem',
      marginTop: '2rem'
    },
    '& .benefits-subsection': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginBottom: '4rem',
      marginLeft: '4rem',
      marginRight: '4rem'
    },
    '& .benefits-subsection-image': {
      objectFit: 'cover',
      overflow: 'hidden',
      height: '50vh',
      borderRadius: '2rem',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    },
    '& .benefits-subsection-image-container': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '2rem'
    },
    '& .benefits-subsection-text': {

    },
    '& .benefits-subsection-text-title': {
      color: colors[variant].main,
      fontSize: '1.5rem',
      marginBottom: '1rem'
    },
    '& .benefits-subsection-text-subtitle': {
      width: baseColors.black,
      marginBottom: '2rem',
      fontWeight: 300
    },
    '@media (min-width: 768px)': {
      '& .benefits-subsection': {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      '& .benefits-subsection-text': {
        width: '45%'
      },
      '& .benefits-subsection-image-container': {
        width: '45%',
      },
      '& .benefits-title': {
        marginBottom: '10rem',
        fontSize: '3.75rem',
      }
    },
  },
  konfio: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '& .benefits-title': {
      textAlign: 'center',
      color: baseColors.black,
      fontWeight: 600,
      fontSize: '1.75rem',
      marginBottom: '4rem',
      marginTop: '2rem'
    },
    '& .benefits-subsection': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginBottom: '4rem',
      marginLeft: '4rem',
      marginRight: '4rem'
    },
    '& .benefits-subsection-image': {
      objectFit: 'cover',
      overflow: 'hidden',
      height: '50vh',
      borderRadius: '1rem'
    },
    '& .benefits-subsection-image-container': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '2rem'
    },
    '& .benefits-subsection-text': {

    },
    '& .benefits-subsection-text-title': {
      color: colors[variant].main,
      fontSize: '1.5rem',
      marginBottom: '1rem'
    },
    '& .benefits-subsection-text-subtitle': {
      width: baseColors.black,
      marginBottom: '2rem',
      fontWeight: 300
    },
    '@media (min-width: 768px)': {
      '& .benefits-subsection': {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      '& .benefits-subsection-text': {
        width: '45%'
      },
      '& .benefits-subsection-image-container': {
        width: '45%',
      },
      '& .benefits-title': {
        marginBottom: '10rem',
        fontSize: '3.75rem'
      },
      '& .benefits-subsection-left-halo': {
        position: 'relative',
        '&:before': {
          content: '""',
          backgroundColor: colors[variant].main,
          position: 'absolute',
          zIndex: '-1',
          top: '-3rem',
          bottom: '-3rem',
          left: '-3rem',
          right: '15rem',
          borderRadius: '1rem 0 0 1rem'
        }
      },
      '& .benefits-subsection-right-halo': {
        position: 'relative',
        '&:before': {
          content: '""',
          backgroundColor: colors[variant].main,
          position: 'absolute',
          zIndex: '-1',
          top: '-3rem',
          bottom: '-3rem',
          left: '15rem',
          right: '-3rem',
          borderRadius: '0 1rem 1rem 0'
        }
      },
    },
  }
});

const benefitsStyles: any = (variant: 'strive' | 'konfio', theme?: Theme) => (styles(variant)[variant]);

export default benefitsStyles;