import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg'
import Image from "next/image"
import { BadContent, Container, Header } from "../styles/pages/app"
import { Handbag } from "phosphor-react"
import Link from "next/link"
import { useState } from "react"
import ShoppingCart from "../components/shoppingCart"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [openShoppingCart, setOpenShoppingCart] = useState(false)

  const itemsToCart = 1
  const haveItemsToCart = !!itemsToCart

  function handleShoppingCart() {
    openShoppingCart ? setOpenShoppingCart(false) : setOpenShoppingCart(true)
  }

  return (
    <Container>
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
      { openShoppingCart && <ShoppingCart /> }
      <Component {...pageProps} />
    </Container>
  )
}
