import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'

import {
  ImagesContainer,
  ImageBox,
  SuccessContainer,
} from '@/styles/pages/success'
import { stripe } from '@/lib/stripe'
import { useEffect } from 'react'

interface SuccessProps {
  customerName: string
  numberOfProducts: number
  images: string[]
}

export default function Success({
  customerName,
  numberOfProducts,
  images,
}: SuccessProps) {
  const { cartCount, clearCart } = useShoppingCart()

  useEffect(() => {
    if (cartCount && cartCount > 0) {
      clearCart()
    }
  }, [clearCart, cartCount])

  return (
    <>
      <Head>
        <title>Purchase made | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Purchase made!</h1>

        <ImagesContainer>
          {images.map((imageUrl) => (
            <ImageBox key={imageUrl}>
              <Image
                src={imageUrl}
                alt=""
                width={120}
                height={110}
                priority={true}
              />
            </ImageBox>
          ))}
        </ImagesContainer>

        <p>
          Woohoo <strong>{customerName}</strong>, your purchase of{' '}
          {numberOfProducts} {numberOfProducts > 1 ? 't-shirts' : 't-shirt'} is
          already on its way to your home.
        </p>

        <Link href="/">Back to catalog</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const numberOfProducts = session.line_items?.data.length
  const images = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product
    return product.images[0]
  })

  return {
    props: {
      customerName,
      numberOfProducts,
      images,
    },
  }
}
