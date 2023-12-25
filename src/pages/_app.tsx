import type { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart'

import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import { Header } from '@/components/Header'

globalStyles()

const stripeKey = String(process.env.STRIPE_PUBLIC_KEY)
const nextUrl = String(process.env.NEXT_URL)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      currency="USD"
      stripe={stripeKey}
      successUrl={`${nextUrl}/success`}
      cancelUrl={`${nextUrl}/`}
      shouldPersist
    >
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
