import axios from "axios";
import Image from "next/image";
import { X } from "phosphor-react";
import { Footer, ImageContent, ProductContainer, Products, ShoppingCartContainer } from "../styles/components/shoppingCart";
import { useShoppingCart } from 'use-shopping-cart'
import { useState } from "react";

export default function ShoppingCart({ shoppingCartOpen }) {
  const {
    cartDetails,
    cartCount, 
    removeItem,
    formattedTotalPrice,
  } = useShoppingCart()

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
    removeItem(id)
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
              <strong>{cartDetails[key].formattedValue}</strong>
              <button onClick={() => handleDelete(cartDetails[key].id)}>Remover</button>
            </div>
          </Products>
        )
      })}
      </ProductContainer>

      <Footer>
        <section>
          <span>Quantidade</span>
          <span>{`${cartCount} itens`}</span>
          <strong>Valor total</strong>
          <strong>{formattedTotalPrice}</strong>
        </section>

        <button disabled={isCreatingCheckoutSession} onClick={handleClick}>Finalizar compra</button>
      </Footer>

    </ShoppingCartContainer>
  )
}
