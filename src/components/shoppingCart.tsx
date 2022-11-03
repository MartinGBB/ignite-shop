import Image from "next/image";
import { X } from "phosphor-react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Footer, ImageContent, ProductContainer, Products, ShoppingCartContainer } from "../styles/components/shoppingCart";

export default function ShoppingCart({ shoppingCartOpen }) {
  const { setProductCart, productCart } = useContext(ProductContext)

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

      {productCart.map((product) => {
        return (
          <Products key={product.id}>
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
              <button onClick={() => handleDelete(product.id)}>Remover</button>
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

        <button>Finalizar compra</button>
      </Footer>

    </ShoppingCartContainer>
  )
}
