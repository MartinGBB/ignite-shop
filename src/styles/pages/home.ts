import { styled } from '..'

export const SliderContainer = styled('main', {
  display: 'flex',
  marginLeft: 'auto',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  minHeight: '80vh',

  position: 'relative',

  '.arrow--left': {
    transform: 'matrix(-1, 0, 0, 1, 0, 0)',
    left: 0,
  },

  '.arrow--right': {
    right: 0,
  },

  '.arrow--disabled': {
    display: 'none',
  },
})

export const HomeContainer = styled('section', {
  paddingLeft: '0.5rem',
  boxSizing: 'content-box',
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',
  minWidth: '30.5rem',

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

    '@media (min-width: 740px)': {
      transform: 'translateY(110%)',
      opacity: 0,
      transition: 'all 0.2s ease-in-out',
    },

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

    '> button': {
      padding: '0.75rem',
      borderRadius: '6px',
      background: '$green500',
      lineHeight: 0,
      border: 'none',
      cursor: 'pointer',
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
