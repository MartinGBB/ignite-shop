import logoImg from '../assets/logo.svg'
import Image from "next/image"
import { BadContent, Header } from "../styles/pages/app"
import { Handbag } from "phosphor-react"
import Link from "next/link"

export default function HeaderC({ shoppingCartOpen }) {
  
  const itemsToCart = 1
  const haveItemsToCart = !!itemsToCart
  
  function handleShoppingCart() {
    shoppingCartOpen(true)
  }

  return (
    <Header>
      <Link href='/'>
        <Image src={logoImg} alt="" />
      </Link>

      <BadContent itemsToCart={haveItemsToCart}>
        <button onClick={handleShoppingCart}>
          <Handbag size={32} weight="bold" />
        </button>
        <span>{itemsToCart}</span>
      </BadContent>
    </Header>
  )
}
