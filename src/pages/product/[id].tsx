import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Stripe from 'stripe'
import axios from 'axios'
import { useShoppingCart } from 'use-shopping-cart'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import { stripe } from '@/lib/stripe'
import { priceFormatter } from '@/utils/formatter'

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: number
  description: string
  defaultPriceId: string
  formattedPrice: string
}

export default function Product(product: ProductProps) {
  const title = `${product.name} | Ignite Shop`
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const { addItem, clearCart } = useShoppingCart()

  function handleAddToBag() {
    clearCart()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.imageUrl,
      currency: 'USD',
      description: product.description,
    })
  }

  // async function handleBuyProduct() {
  //   try {
  //     setIsCreatingCheckoutSession(true)

  //     const response = await axios.post('/api/checkout', {
  //       priceId: product.defaultPriceId,
  //     })

  //     const { checkoutUrl } = response.data

  //     window.location.href = checkoutUrl
  //   } catch (error) {
  //     setIsCreatingCheckoutSession(false)

  //     alert('Failed to redirect to checkout page!')
  //   }
  // }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            alt=""
            width={520}
            height={480}
            priority={true}
          />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.formattedPrice}</span>
          <p>{product.description}</p>

          <button disabled={isCreatingCheckoutSession} onClick={handleAddToBag}>
            Put in Bag
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id

  if (!productId) {
    throw Error('No productId was found!')
  }

  const stripeProduct = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = stripeProduct.default_price as Stripe.Price

  if (!price || !price.unit_amount) {
    throw Error('No price was found!')
  }

  const product: ProductProps = {
    id: stripeProduct.id,
    name: stripeProduct.name,
    imageUrl: stripeProduct.images[0],
    price: price.unit_amount,
    description: String(stripeProduct.description),
    defaultPriceId: price.id,
    formattedPrice: priceFormatter.format(price.unit_amount / 100),
  }

  return {
    props: product,
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
