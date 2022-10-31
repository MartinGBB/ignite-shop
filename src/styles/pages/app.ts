import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: "flex-start",
  justifyContent: "center",
  position: 'relative',
  height: '100vh'
})

export const Header = styled('header', {
  padding: '2rem',
  width: '100%',
  maxWidth:1180,
  margin: '0 auto',
  
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  button: {
    border: 0,
    padding: '0.75rem',
    background: '$gray800',
    borderRadius: 6,
    lineHeight: 0,
    cursor: 'pointer'
  },
  
  '@media (max-width: 700px)': {
    padding: '2rem',
  },
})
