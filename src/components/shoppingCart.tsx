import Image from "next/image";
import { X } from "phosphor-react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Footer, ImageContent, Products, ShoppingCartContainer } from "../styles/components/shoppingCart";

export default function ShoppingCart({ shoppingCartOpen }) {
  const { setProductCart, productCart } = useContext(ProductContext)

  function handleCloseShoppingCart() {
    shoppingCartOpen(false)
  }
console.log(productCart)
  return (
    <ShoppingCartContainer>
      <header>
        <button onClick={ handleCloseShoppingCart }><X size={24} weight="bold" /> </button>
        <h1>Sacola de compras</h1>
      </header>

      {productCart.map((product) => {
        return (
          <Products>
            <ImageContent>
              <Image
                src={product.imageUrl}
                blurDataURL={product.imageUrl}
                placeholder="blur"
                width={94.79}
                height={94.79}
              />
            </ImageContent>

            <div>
              <h2>{product.name}</h2>
              <strong>{product.price}</strong>
              <button>Remover</button>
            </div>
          </Products>
        )
      })}

      <Footer>
        <section>
          <span>Quantidade</span>
          <span>3 itens</span>
          <strong>Valor total</strong>
          <strong>R$ 270,00</strong>
        </section>

        <button>Finalizar compra</button>
      </Footer>

    </ShoppingCartContainer>
  )
}
