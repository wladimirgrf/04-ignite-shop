import { useEffect, useState, useCallback } from 'react'
import { Handbag } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'
import { useShoppingCart } from 'use-shopping-cart'

import logoimg from '../assets/logo.svg'

import { BagButton, HeaderContainer } from '@/styles/components/header'
import { Bag } from './Bag'

export function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [cartHasItems, setCartHasItems] = useState(false)
  const { cartCount } = useShoppingCart()

  const handleOpenDialog = useCallback(() => {
    if (cartCount && cartCount > 0) {
      setIsDialogOpen((state) => !state)
    } else {
      setIsDialogOpen(false)
    }
  }, [cartCount])

  useEffect(() => {
    if (cartCount && cartCount > 0) {
      setCartHasItems(true)
    } else {
      setCartHasItems(false)
      setIsDialogOpen(false)
    }
  }, [cartCount])

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoimg} alt="" />
      </Link>

      <Dialog.Root open={isDialogOpen} onOpenChange={handleOpenDialog}>
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
