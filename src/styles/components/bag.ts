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

  form: {
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',

    h1: {
      fontSize: '1.25rem',
      color: '$gray100',
    },

    button: {
      border: 0,
      padding: '1.25rem',
      fontSize: '1.125rem',
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
  },
})

export const ItemDetails = styled('div', {
  marginLeft: '1.25rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  span: {
    color: '$gray300',
    fontSize: '1.125rem',
  },

  strong: {
    color: '$gray100',
    fontSize: '1.125rem',
  },

  a: {
    color: '$green500',
    fontSize: '1rem',
    textDecoration: 'none',
    fontWeight: 'bold',

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
    fontSize: '1rem',
    color: '$gray100',
  },

  strong: {
    fontSize: '1.125rem',
    fontWeight: 'normal',
    color: '$gray300',
  },
})

export const CheckoutTotal = styled('div', {
  marginTop: '0.438rem',
  display: 'flex',
  justifyContent: 'space-between',

  span: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '$gray100',
  },

  strong: {
    fontSize: '1.5rem',
    color: '$gray100',
  },
})
