import { X } from "phosphor-react";
import { ImageContent, Products, ShoppingCartContainer } from "../styles/pages/ShoppingCart";

export default function ShoppingCart() {
  return (
    <ShoppingCartContainer>
      <span><X size={24} color="#8D8D99" weight="bold" /> </span>
      <h1>Sacola de compras</h1>

      <Products>
        <ImageContent>

        </ImageContent>

        <div>
          <h2>Camiseta Beyond the Limits</h2>
          <strong>R$ 79,90</strong>
          <button>Remover</button>
        </div>
      </Products>
    </ShoppingCartContainer>
  )
}
