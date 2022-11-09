import { styled } from '..'

export const ArrowContainer = styled('main', {
  position: 'absolute',
  background:
    'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',

  height: '80vh',
  width: '6rem',

  '& button': {
    border: 'none',
    position: 'absolute',
    top: 'calc(50% - 48px/2)',
    left: 16,
    background: 'transparent',
    lineHeight: 0,
    cursor: 'pointer',
    color: '$gray300',
  },
})
