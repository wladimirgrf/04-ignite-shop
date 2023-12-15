import 'keen-slider/keen-slider.min.css'

import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Stripe from 'stripe'
import { useKeenSlider } from 'keen-slider/react'
import { Handbag } from '@phosphor-icons/react'

import {
  BagBox,
  HomeContainer,
  Product,
  ProductDetails,
} from '@/styles/pages/home'
import { stripe } from '@/lib/stripe'
import { priceFormatter } from '@/utils/formatter'

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface HomeProps {
  products: ProductProps[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 3, spacing: 48 },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            <Product className="keen-slider__slide">
              <Image
                src={product.imageUrl}
                width={520}
                height={480}
                alt=""
                priority={true}
              />

              <footer>
                <ProductDetails>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </ProductDetails>

                <BagBox>
                  <Handbag size={32} weight="bold" />
                </BagBox>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products: ProductProps[] = []

  response.data.forEach((product) => {
    const price = product.default_price as Stripe.Price

    if (price && price.unit_amount) {
      products.push({
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: priceFormatter.format(price.unit_amount / 100),
      })
    }
  })

  return {
    props: { products },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
