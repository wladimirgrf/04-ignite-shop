
import { Handbag } from '@phosphor-icons/react'
import Image from 'next/image';

import logoimg from '../assets/logo.svg'

import { BagButton, HeaderContainer } from '@/styles/components/header';


export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoimg} alt="" />

      <BagButton>
        <span>1</span>
        <Handbag size={22} />
      </BagButton>
    </HeaderContainer>
  )
}
