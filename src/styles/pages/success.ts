import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
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
      color: '$green300',
    },
  },
})

export const ImagesContainer = styled('div', {
  width: '100%',
  maxWidth: 316,
  height: 145,
  marginTop: '4rem',

  display: 'flex',
  justifyContent: 'center',
})

export const ImageBox = styled('div', {
  width: '8.75rem',
  height: '8.75rem',

  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '50%',
  padding: '0.25rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  boxShadow: '0 0 80px rgba(0, 0, 0, 0.6)',

  img: {
    objectFit: 'cover',
  },

  '& + &': {
    marginLeft: 'calc(-8.75rem / 3)',
  },
})
