import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import { Container } from "../styles/pages/app"
import { useState } from "react"
import ShoppingCart from "../components/shoppingCart"
import HeaderC from "../components/header"
import { ProductProvider } from "../context/ProductContext"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [openShoppingCart, setOpenShoppingCart] = useState(false)

  function shoppingCartOpen(openCart: boolean) {
    setOpenShoppingCart(openCart)
  }
  
  return (
    <Container>
      <ProductProvider>
        <HeaderC shoppingCartOpen={shoppingCartOpen} />
        { openShoppingCart && <ShoppingCart shoppingCartOpen={shoppingCartOpen} /> }
        <Component {...pageProps} />
      </ProductProvider>
    </Container>
  )
}
