import { styled } from '..'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const BagButton = styled('button', {
  border: 0,
  padding: '0.75rem',
  borderRadius: 6,

  backgroundColor: '$gray800',

  variants: {
    cart: {
      withItems: {
        color: '$gray300',
        cursor: 'pointer',
      },
      noItems: {
        color: '$gray500',
        cursor: 'regular',
      },
    },
  },

  span: {
    display: 'flex',
    position: 'absolute',
    marginLeft: '1.25rem',
    marginTop: '-0.875rem',

    padding: '0.125rem 0.375rem',
    fontSize: '$xs',
    fontWeight: 'bold',
    borderRadius: '50%',

    background: '$green500',
    color: '$white',
  },
})
