import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  padding: '0 2rem',
  marginLeft: 'auto',
  minHeight: '80vh',




  position: 'relative',

  '.arrow': {
    width: '30px',
    height: '30px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    '-webkit-transform': 'translateY(-50%)',
    fill: '$gray100',
    cursor: 'pointer',
  },

  '.arrow--left': {
    left: '5px',
  },

  '.arrow--right': {
    left: 'auto',
    right: '5px',
  },

  '.arrow--disabled': {
    display: 'none',
  },
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',

  minWidth: '34.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.25rem',
    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    section: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'left',
      gap: '0.25rem',

      strong: {
        fontSize: '$lg',
        color: '$gray100',
      },

      span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green300',
      },
    },

    '> span': {
      padding: '0.75rem',
      borderRadius: '6px',
      background: '$green500',
      lineHeight: 0,
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },

  '@media (max-width: 800px)': {
    minWidth: '23rem',
  },
})

export const SliderContainer = styled('div', {
  position: 'relative',
  marginLeft: 'auto',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',

  '.arrow': {
    width: '30px',
    height: '30px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    '-webkit-transform': 'translateY(-50%)',
    fill: '$gray100',
    cursor: 'pointer',
  },

  '.arrow--left': {
    left: '5px',
  },

  '.arrow--right': {
    left: 'auto',
    right: '5px',
  },

  '.arrow--disabled': {
    display: 'none',
  },
})