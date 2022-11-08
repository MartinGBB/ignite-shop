import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { BadContent, HeaderContainer } from '../styles/components/header'
import { Handbag } from 'phosphor-react'
import Link from 'next/link'
import { useShoppingCart } from 'use-shopping-cart'
import { useRouter } from 'next/router'

export default function HeaderC({ shoppingCartOpen }) {
  const { cartDetails } = useShoppingCart()

  const itemsToCart = Object.keys(cartDetails).length
  const haveItemsToCart = !!itemsToCart

  const { route } = useRouter()

  const showSoppingCart = !route.includes('/success')

  function handleShoppingCart() {
    shoppingCartOpen(true)
  }

  return (
    <HeaderContainer showSoppingCart={showSoppingCart}>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      {showSoppingCart && (
        <BadContent itemsToCart={haveItemsToCart}>
          <button onClick={handleShoppingCart}>
            <Handbag size={32} weight="bold" />
          </button>
          <span>{itemsToCart}</span>
        </BadContent>
      )}
    </HeaderContainer>
  )
}
