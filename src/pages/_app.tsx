import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg'
import Image from "next/image"
import { Container, Header } from "../styles/pages/app"
import { Handbag } from "phosphor-react"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <button>
          <Handbag size={32} color="#8D8D99" weight="bold" />
        </button>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
