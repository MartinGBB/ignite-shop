import Image from 'next/image'
import { HomeContainer, Product } from '../styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { GetStaticProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Link from 'next/link'
import Head from 'next/head'
import { Handbag } from 'phosphor-react'
import { useState } from 'react'
interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 'auto',
      spacing: 48,
    },

    breakpoints: {
      '(max-width: 450px)': {
        slides: {
          perView: 1,
          spacing: 24,
        },
      },
    },

    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite</title>
      </Head>

      <HomeContainer ref={sliderRef} className="navigation-wrapper">
        <div className="keen-slider">
          {products.map((product) => {
            return (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                prefetch={false}
              >
                <Product
                  className={`keen-slider__slide number-slide${product.id}`}
                >
                  <Image
                    placeholder="blur"
                    blurDataURL={product.imageUrl}
                    src={product.imageUrl}
                    alt=""
                    width={520}
                    height={480}
                  />
                  <footer>
                    <section>
                      <strong>{product.name}</strong>
                      <span>{product.price}</span>
                    </section>
                    <span>
                      <Handbag size={32} color="#FFFFFF" weight="bold" />
                    </span>
                  </footer>
                </Product>
              </Link>
            )
          })}
        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </HomeContainer>
    </>
  )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabeld = props.disabled ? ' arrow--disabled' : ''

  return (
    <svg
      width="30px"
      fill="#fff"
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // cada duas horas vai validar
  }
}
