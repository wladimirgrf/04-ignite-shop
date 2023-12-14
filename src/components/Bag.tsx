import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from '@phosphor-icons/react'

import {
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
  return (
    <Dialog.Portal>
      <CloseButton>
        <X size={24} />
      </CloseButton>

      <Content>
        <form>
          <h1>Shopping Bag</h1>
          <ItemsList>
            <Item>
              <ThumbnailContainer>
                <Image
                  alt=""
                  src="https://files.stripe.com/links/MDB8YWNjdF8xT01DbDlMdkt1Z1pwVUl4fGZsX3Rlc3RfUzBwZXkzZVBuNWwzQ2RiS3NxNktreVpR00s5OzgfBG"
                  width={102}
                  height={93}
                  priority={true}
                />
              </ThumbnailContainer>

              <ItemDetails>
                <span>T-shirt</span>
                <strong>$49.99</strong>
                <a href="">Remove</a>
              </ItemDetails>
            </Item>
            <Item>
              <ThumbnailContainer>
                <Image
                  alt=""
                  src="https://files.stripe.com/links/MDB8YWNjdF8xT01DbDlMdkt1Z1pwVUl4fGZsX3Rlc3RfUzBwZXkzZVBuNWwzQ2RiS3NxNktreVpR00s5OzgfBG"
                  width={102}
                  height={93}
                  priority={true}
                />
              </ThumbnailContainer>

              <ItemDetails>
                <span>T-shirt</span>
                <strong>$49.99</strong>
                <a href="">Remove</a>
              </ItemDetails>
            </Item>
          </ItemsList>
          <CheckoutSummary>
            <CheckoutQuantity>
              <span>Quantity</span>
              <strong>1</strong>
            </CheckoutQuantity>
            <CheckoutTotal>
              <span>Total</span>
              <strong>$49,99</strong>
            </CheckoutTotal>
          </CheckoutSummary>
          <button>Checkout</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
