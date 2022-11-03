import logoImg from '../assets/logo.svg'
import Image from "next/image"
import { BadContent, Header } from "../styles/pages/app"
import { Handbag } from "phosphor-react"
import Link from "next/link"
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

export default function HeaderC({ shoppingCartOpen }) {
  const { productCart } = useContext(ProductContext)
  
  const itemsToCart = productCart.length
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
