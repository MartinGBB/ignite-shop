import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"

import c1 from '../assets/camisetas/c1.png'
import c2 from '../assets/camisetas/c2.png'


export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={c1} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={c2} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
