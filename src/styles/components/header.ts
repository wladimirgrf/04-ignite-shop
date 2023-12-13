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
  cursor: 'pointer',
  padding: '0.75rem',
  borderRadius: 6,

  backgroundColor: '$gray800',
  color: '$gray500',

  span: {
    display: 'flex',
    position: 'absolute',
    marginLeft: '1.25rem',
    marginTop: '-0.875rem',

    padding: '0.125rem 0.375rem',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    borderRadius: '50%',

    background: '$green500',
    color: '$white',
  },
})
