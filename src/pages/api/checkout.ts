import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { products } = req.body

  const { VERCEL_URL, NEXT_URL } = process.env

  if (!products) {
    return res.status(400).json({ error: 'Price not found.' })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const successUrl = `${
    VERCEL_URL || NEXT_URL
  }/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const arrProducts = Object.keys(products).map((key) => products[key])

  const lineItems = arrProducts.map((items) => {
    return {
      price: items.price_id,
      quantity: items.quantity,
    }
  })

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'subscription',
    line_items: lineItems,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
