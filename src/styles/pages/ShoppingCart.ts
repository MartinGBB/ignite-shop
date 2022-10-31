import { styled } from "..";

export const ShoppingCartContainer = styled('div', {
  position: 'absolute',
  right: 0,
  zIndex: '1',

  background: '$gray800',
  height: '100vh',
  maxWidth: '30rem',
  padding: '3rem',
  paddingTop: '1.5rem',

  span: {
    display: 'flex',
    justifyContent: 'end',
    lineHeight: 0,
    marginRight: '-24px',
  },

  h1 : {
    margin: '1.25rem 0 2rem',
    fontSize: "1.25rem"
  },
})

export const Products = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1.25rem',
  margin: '1.5rem 0',
  maxWidth: '30rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '160%',

    h2: {
      fontSize: '1.125rem',
      fontWeight: '400',
    },

    strong: {
      fontSize: '1.125rem',
    },
  
    button: {
      border: 'none',
      background: 'transparent',
      fontWeight: 'bold',
      color: '$green500',

      display: 'flex',
      marginTop: 'auto',
      fontSize: '1rem',

      cursor: 'pointer', 
    }
  }
})

export const ImageContent = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  width: '6.37rem',
  height: '6.37rem',
  borderRadius: '8px',
})