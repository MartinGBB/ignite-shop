import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg'
import Image from "next/image"
import { Container, Header } from "../styles/pages/app"
import { Handbag } from "phosphor-react"
import Link from "next/link"
import { useState } from "react"
import ShoppingCart from "../components/shoppingCart"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [openShoppingCart, setOpenShoppingCart] = useState(false)

  function handleShoppingCart() {
    openShoppingCart ? setOpenShoppingCart(false) : setOpenShoppingCart(true)
  }

  return (
    <Container>
      <Header>
        <Link href='/'>
          <Image src={logoImg} alt="" />
        </Link>
        <button onClick={handleShoppingCart}>
          <Handbag size={32} color="#8D8D99" weight="bold" />
        </button>
      </Header>
      { openShoppingCart && <ShoppingCart /> }
      <Component {...pageProps} />
    </Container>
  )
}
