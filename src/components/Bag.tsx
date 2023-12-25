import { useEffect, useState } from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from '@phosphor-icons/react'
import { useShoppingCart } from 'use-shopping-cart'
import { CartEntry } from 'use-shopping-cart/core'

import {
  CheckoutButton,
  CheckoutQuantity,
  CheckoutSummary,
  CheckoutTotal,
  CloseButton,
  Content,
  Item,
  ItemDetails,
  ItemsList,
  ThumbnailContainer,
} from '@/styles/components/bag'

export function Bag() {
  const { cartDetails, cartCount, formattedTotalPrice, removeItem } =
    useShoppingCart()
  const [items, setItems] = useState<[string, CartEntry][]>([])

  useEffect(() => {
    if (cartDetails) {
      setItems(Object.entries(cartDetails))
    }
  }, [cartDetails])

  return (
    <Dialog.Portal>
      <CloseButton>
        <X size={24} />
      </CloseButton>

      <Content>
        <form>
          <h1>Shopping Bag</h1>
          <ItemsList>
            {items.map(([key, product]) => (
              <Item key={key}>
                <ThumbnailContainer>
                  <Image
                    alt=""
                    width={102}
                    height={93}
                    priority={true}
                    src={String(product.image)}
                  />
                </ThumbnailContainer>

                <ItemDetails>
                  <span>{product.name}</span>
                  <strong>{product.formattedValue}</strong>
                  <button
                    onClick={() => {
                      removeItem(product.id)
                    }}
                  >
                    Remove
                  </button>
                </ItemDetails>
              </Item>
            ))}
          </ItemsList>
          <CheckoutSummary>
            <CheckoutQuantity>
              <span>Quantity</span>
              <strong>{cartCount}</strong>
            </CheckoutQuantity>
            <CheckoutTotal>
              <span>Total</span>
              <strong>{formattedTotalPrice}</strong>
            </CheckoutTotal>
          </CheckoutSummary>
          <CheckoutButton>Checkout</CheckoutButton>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
