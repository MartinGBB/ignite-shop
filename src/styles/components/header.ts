import { styled } from '..'

export const HeaderContainer = styled('header', {
  padding: '2rem 1rem',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  variants: {
    showSoppingCart: {
      false: {
        justifyContent: 'center',
      },
    },
  },
})

export const BadContent = styled('section', {
  position: 'relative',

  button: {
    border: 0,
    padding: '0.75rem',
    background: '$gray800',
    borderRadius: 6,
    lineHeight: 0,
    color: '$gray300',
    cursor: 'pointer',

    '&:hover': {
      color: '$gray100',
      transition: '1s',
    },
  },

  variants: {
    itemsToCart: {
      false: {
        span: {
          display: 'none',
        },
      },
    },
  },

  span: {
    position: 'absolute',
    top: -9,
    right: -9,

    borderRadius: 1000,
    padding: '0.75rem',
    background: '$green500',

    lineHeight: 0,
    width: 0,
    border: '3px solid $gray900',

    display: 'flex',
    justifyContent: 'center',
  },
})
