import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Stripe from "stripe";
import Loading from "../../components/_ui/loading";
import { ProductContext } from "../../context/ProductContext";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  // const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { setProductCart, productCart } = useContext(ProductContext)

  const { isFallback } = useRouter()

  // async function handleClick() {
  //   try {
  //     setIsCreatingCheckoutSession(true)

  //     const response = await axios.post('/api/checkout', {
  //       priceId: product.defaultPriceId
  //     })

  //     const { checkoutUrl } = response.data

  //     window.location.href = checkoutUrl
  //   } catch (err) {
  //     setIsCreatingCheckoutSession(false)
  //     alert('falha ao redirecionar')
  //   }
  // }

  function handleClick() {
    const productRepeat = productCart.some((productInCart) => (
      productInCart.id === product.id
    ))

    if (productRepeat) {
      return alert('produto já adicionado')
    }
    setProductCart([product, ...productCart])
  }

  if (isFallback) return <Loading />

  return (
    <>
      <Head>
        <title>{product.name} | Ignite</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image placeholder="blur" blurDataURL={product.imageUrl} height={480} width={520} src={product.imageUrl} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>
          <button disabled={false} onClick={handleClick}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_MgDJFmeNQSBfQy' } }
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1 //1h
  }
}