import type { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart'

import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import { Header } from '@/components/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const stripeKey = String(process.env.NEXT_PUBLIC_STRIPE_KEY)
  const appUrl = process.env.NEXT_PUBLIC_URL

  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      currency="USD"
      stripe={stripeKey}
      successUrl={`${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`${appUrl}/`}
      shouldPersist
    >
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
