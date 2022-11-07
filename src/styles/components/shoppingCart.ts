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

  'header > button': {
    display: 'flex',
    justifyContent: 'end',
    margin: 'auto',
    lineHeight: 0,
    marginRight: '-24px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#8D8D99',
    
    '&:hover': {
      color: '$gray100',
      transition: '1s',
    }
  },

  h1: {
    margin: '1.25rem 0 1.125rem',
    fontSize: "1.25rem"
  },
})

export const CartEmpty = styled('div', {
  margin: '0.75rem 3.5rem 0 0',
  maxWidth: '30rem',
})

export const ProductContainer = styled('div', {
  overflow: 'auto',

  '&::-webkit-scrollbar': {
    width: '0.25rem',
  },

  '&::-webkit-scrollbar-track-piece': {
    background: '$green300',
  },
  
  '&::-webkit-scrollbar-thumb': {
    background: '$green500',
    borderRadius: 1000,
  },

})

export const Products = styled('section', {
  display: 'flex',
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
      color: '$gray300'
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

      '&:hover': {
        color: '$green300',
        transition: '1s',
      }
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
  
  section: {
    display: 'grid',
    gridTemplateRows: "repeat(2, 1fr)",
    gap: 7,

    marginBottom: '3.56rem',
    
    '& span': {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      width: '100%',
    },

    strong: {
    },
    
    '& span:nth-child(2)': {
      gridColumn: '3',
      gridRow: '1',
      justifyContent: 'end',
      color: '$gray300',
    },
    
    '& strong:nth-child(3)': {
      fontSize: '1.125rem',
      gridColumn: '1',
      gridRow: '2',
    },
    
    '& strong:nth-child(4)': {
      fontSize: '1.5rem',
      gridColumn: '3',
      gridRow: '2',
      display: 'flex',
      justifyContent: 'end',
    },
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
    width: '100%',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
      background: '$green300',
      transition: '1s',
    }
  }
})

