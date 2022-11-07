import { GetServerSideProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"
import { stripe } from "../lib/stripe"
import { SuccessContainer, ImageContainer } from "../styles/pages/success"

interface SuccessProps {
  customerName: string
  product: Stripe.Product[]
}


export default function Success({ customerName, product }: SuccessProps) {

  const pluralOrSingular = (length: number) => (
    length > 1 ? 'camisetas' : 'camiseta'
  )

  return (
  <>
    <Head>
      <title>Success | Ignite</title>
      <meta name="robots" content="noindex" />
    </Head>

    <SuccessContainer>
      {product.map((item) => {
        return (
          <ImageContainer key={item.id}>
            <Image
              placeholder="blur"
              blurDataURL={item.images[0]}
              src={item.images[0]}
              width={120}
              height={110}
              alt={item.name}
              />
          </ImageContainer>
        )
      })}

      <h1>Compra efetuada!</h1>
      <p>
        Uhuul <strong>{customerName}</strong>, sua compra de <strong>{product.length}</strong> {pluralOrSingular(product.length)} já está a caminho da sua casa. 
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  const products = session.line_items.data.map((item) => (
    item.price.product
  )) as Stripe.Product[]

  return {
    props: {
      customerName,
      product: products
    }
  }
}