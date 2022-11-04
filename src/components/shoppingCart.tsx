import axios from "axios";
import Image from "next/image";
import { X } from "phosphor-react";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Footer, ImageContent, ProductContainer, Products, ShoppingCartContainer } from "../styles/components/shoppingCart";
import { useShoppingCart } from 'use-shopping-cart'

export default function ShoppingCart({ shoppingCartOpen }) {
  const {
    cartDetails,
  } = useShoppingCart()

  const { setProductCart, productCart } = useContext(ProductContext)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  
  async function handleClick() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: cartDetails
      })

      const { checkoutUrl } = response.data

       window.location.href = checkoutUrl
    } catch (err) {
        setIsCreatingCheckoutSession(false)
        console.log(err.message)
        alert('falha ao redirecionar')
    }
  }

  function handleCloseShoppingCart() {
    shoppingCartOpen(false)
  }

  function handleDelete(id: string) {
    const removeProduct = productCart
      .filter((product) => product.id !== id)

    setProductCart((removeProduct))
  }

  return (
    <ShoppingCartContainer>
      <header>
        <button onClick={ handleCloseShoppingCart }><X size={24} weight="bold" /> </button>
        <h1>Sacola de compras</h1>
      </header>

      <ProductContainer>

      {Object.keys(cartDetails).map((key) => {
        return (
          <Products key={cartDetails[key].id}>
            <ImageContent>
              <Image
                src={cartDetails[key].image}
                alt={cartDetails[key].name}
                blurDataURL={cartDetails[key].image}
                placeholder="blur"
                width={94.79}
                height={94.79}
                />
            </ImageContent>

            <div>
              <h2>{cartDetails[key].name}</h2>
              <strong>{cartDetails[key].price}</strong>
              <button onClick={() => handleDelete(cartDetails[key].id)}>Remover</button>
            </div>
          </Products>
        )
      })}
      </ProductContainer>

      <Footer>
        <section>
          <span>Quantidade</span>
          <span>3 itens</span>
          <strong>Valor total</strong>
          <strong>R$ 270,00</strong>
        </section>

        <button disabled={isCreatingCheckoutSession} onClick={handleClick}>Finalizar compra</button>
      </Footer>

    </ShoppingCartContainer>
  )
}
