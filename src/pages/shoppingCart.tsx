import { X } from "phosphor-react";
import { Footer, ImageContent, Products, ShoppingCartContainer } from "../styles/pages/shoppingCart";

export default function ShoppingCart() {
  return (
    <ShoppingCartContainer>
      <header>
        <span><X size={24} color="#8D8D99" weight="bold" /> </span>
        <h1>Sacola de compras</h1>
      </header>
   
      <Products>
        <ImageContent>

        </ImageContent>

        <div>
          <h2>Camiseta Beyond the Limits</h2>
          <strong>R$ 79,90</strong>
          <button>Remover</button>
        </div>
      </Products>

      <Products>
        <ImageContent>

        </ImageContent>

        <div>
          <h2>Camiseta Beyond the Limits</h2>
          <strong>R$ 79,90</strong>
          <button>Remover</button>
        </div>
      </Products>

      <Footer>
        <section>
          <span>Quantidade</span>
          <span>3 itens</span>
          <strong>Valor total</strong>
          <strong>R$ 270,00</strong>
        </section>

        {/* <button>Finalizar compra</button> */}
      </Footer>

    </ShoppingCartContainer>
  )
}
