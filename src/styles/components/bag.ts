import * as Dialog from '@radix-ui/react-dialog'

import { styled } from '..'

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  right: 0,
  top: 0,
  bottom: 0,
  width: '30rem',
  height: '100vh',
  backgroundColor: '$gray800',
  pointerEvents: 'none',

  form: {
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',

    h1: {
      fontSize: '$lg',
      color: '$gray100',
    },
  },
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  cursor: 'pointer',
  color: '$gray500',
  top: '1.758rem',
  right: '1.758rem',
  border: 0,
  lineHeight: 0,
  zIndex: 99,
  pointerEvents: 'auto',
})

export const ItemsList = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const Item = styled('div', {
  display: 'flex',
})

export const ThumbnailContainer = styled('div', {
  width: '100%',
  maxWidth: 102,
  height: 93,

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
    width: '100%',
    height: 'auto',
  },
})

export const ItemDetails = styled('div', {
  marginLeft: '1.25rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  span: {
    color: '$gray300',
    fontSize: '$md',
  },

  strong: {
    color: '$gray100',
    fontSize: '$md',
  },

  button: {
    display: 'flex',
    color: '$green500',
    fontSize: '$sm',
    textDecoration: 'none',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const CheckoutSummary = styled('div', {
  position: 'absolute',
  left: '3rem',
  right: '3rem',
  bottom: '10.875rem',
})

export const CheckoutQuantity = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  span: {
    fontSize: '$sm',
    color: '$gray100',
  },

  strong: {
    fontSize: '$md',
    fontWeight: 'normal',
    color: '$gray300',
  },
})

export const CheckoutTotal = styled('div', {
  marginTop: '0.438rem',
  display: 'flex',
  justifyContent: 'space-between',

  span: {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray100',
  },

  strong: {
    fontSize: '$xl',
    color: '$gray100',
  },
})

export const CheckoutButton = styled('button', {
  border: 0,
  padding: '1.25rem',
  fontSize: '$md',
  fontWeight: 'bold',
  backgroundColor: '$green500',
  color: '$white',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'absolute',
  left: '3rem',
  right: '3rem',
  bottom: '3rem',

  '&:hover': {
    backgroundColor: '$green300',
  },
})
