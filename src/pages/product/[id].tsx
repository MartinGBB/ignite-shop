import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta</h1>
        <span>R$ 79,99</span>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident laborum praesentium facere quia nostrum ratione quibusdam repellendus veritatis cum odio blanditiis in, at tempora corporis, illum asperiores aut ipsam doloremque.</p>
      <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}