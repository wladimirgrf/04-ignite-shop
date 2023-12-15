import type { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart'

import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import { Header } from '@/components/Header'

globalStyles()

const stripeKey = String(process.env.STRIPE_PUBLIC_KEY)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  )
}
