import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'stretch',
  gap: '4rem',
  margin: '0 auto',
  maxWidth: 1180,
  padding: '0 2rem',
  height: '80vh',

  '@media(max-width: 800px)': {
    display: 'flex',
    flexDirection: 'column',

    'main > button': {
      margin: '1rem 0',
    },
  },
})

export const ImageContainer = styled('main', {
  width: '100%',
  maxHeight: '80vh',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ProductDetails = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '"$2xl"',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '2rem',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: '1.6',
    color: '$gray-300',
  },

  button: {
    marginTop: 'auto',
    background: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      background: '$green300',
      transition: '1s',
    },
  },
})
