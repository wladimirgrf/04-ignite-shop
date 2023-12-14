import { Handbag } from '@phosphor-icons/react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'

import logoimg from '../assets/logo.svg'

import { BagButton, HeaderContainer } from '@/styles/components/header'
import { Bag } from './Bag'

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoimg} alt="" />

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <BagButton>
            <span>1</span>
            <Handbag size={22} />
          </BagButton>
        </Dialog.Trigger>

        <Bag />
      </Dialog.Root>
    </HeaderContainer>
  )
}
