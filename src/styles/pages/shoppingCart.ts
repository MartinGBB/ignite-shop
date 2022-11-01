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
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  flexDirection: 'column',

  span: {
    display: 'flex',
    justifyContent: 'end',
    lineHeight: 0,
    marginRight: '-24px',
  },

  h1: {
    margin: '1.25rem 0 1.125rem',
    fontSize: "1.25rem"
  },
})

export const Products = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1.25rem',
  margin: '0.75rem 0',
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

export const Footer = styled('footer', {
  marginTop: 'auto',
  marginBottom: '3.56rem',

  section: {
    display: 'grid',
    gridTemplateRows: "repeat(2, 1fr)",
    gap: 7,
    
    '& span': {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      width: '100%'
    },

    '& span:nth-child(2)': {
      gridColumn: '3',
      gridRow: '1',
      justifyContent: 'end',
    },

    '& strong:nth-child(3)': {
      gridColumn: '1',
      gridRow: '2',
    },
    
    '& strong:nth-child(4)': {
      gridColumn: '3',
      gridRow: '2',
      display: 'flex',
      justifyContent: 'end',
    },
  },
})
