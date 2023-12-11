import { useRouter } from "next/router"

import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"

export default function Product() {
  const {query} = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>

      <ProductDetails>
        <h1>Tshirt X</h1>
        <span>$44,9</span>
        <p>lorem</p>

        <button>Buy</button>
      </ProductDetails>
    </ProductContainer>
  )
}