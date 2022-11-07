import { styled } from ".."

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    color: '$gray100',
    margin: '2.375rem 0 1.5rem'
  },

  p: {
    fontSize: '1.5rem',
    color: "$gray300",
    maxWidth: 560,
    textAlign: 'center',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const ImageContainer = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '4rem',
  margin: '0 auto',
})

export const ImageContent = styled('section', {
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  padding: '0.25rem',
  borderRadius: 1000,
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  
  '&:not(:first-child)': {
    marginLeft: '-10%',
  },
  
  img: {
    objectFit: "cover",
  },
})
