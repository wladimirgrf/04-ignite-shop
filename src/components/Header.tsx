import { Handbag } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'
import { useShoppingCart } from 'use-shopping-cart'

import logoimg from '../assets/logo.svg'

import { BagButton, HeaderContainer } from '@/styles/components/header'
import { Bag } from './Bag'
import { useEffect, useState } from 'react'

export function Header() {
  const [cartHasItems, setCartHasItems] = useState(false)
  const { cartCount } = useShoppingCart()

  useEffect(() => {
    if (cartCount && cartCount > 0) {
      setCartHasItems(true)
    }
  }, [cartCount])

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoimg} alt="" />
      </Link>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <BagButton cart={cartHasItems ? 'withItems' : 'noItems'}>
            {cartHasItems && <span>{cartCount}</span>}
            <Handbag size={22} />
          </BagButton>
        </Dialog.Trigger>

        <Bag />
      </Dialog.Root>
    </HeaderContainer>
  )
}
