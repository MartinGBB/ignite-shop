let items = {
  prod_MgDJFmeNQSBfQy: {
    currency: 'BRL',
    id: 'prod_MgDJFmeNQSBfQy',
    name: 'Camiseta Maratona Explorer 2.0',
    price: 8990,
    price_id: 'price_1Lwqt7BWNdAduV2MBjCso0yQ',
    image: 'https://files.stripe.com/links/MDB8YWNjdF8xTHdxZUxCV05kQWR1VjJNfGZsX3Rlc3RfbHdUeHhmeWZtRVJzY2VaZm1sNldqYWxj00b5tUHXGO',
    description: 'Gostosas como um abraço, nossos produtos são feitos do mais puro e nobre algodão brasileiro, ideais para climas de Norte a Sul. Todas as cores de camisetas e regatas são 100% algodão, exceto as cinzas-mescla, que são 88% algodão e 12% poliéster.',
    quantity: 2,
    value: 17980,
    price_data: {},
    product_data: {},
    formattedValue: 'R$ 179,80',
    formattedPrice: 'R$ 89,90'
  },
  prod_MgDHl5Ab7eMCQ9: {
    currency: 'BRL',
    id: 'prod_MgDHl5Ab7eMCQ9',
    name: 'Camiseta Maratona Explorer',
    price: 6990,
    price_id: 'price_1LwqqaBWNdAduV2MUBuM2mI6',
    image: 'https://files.stripe.com/links/MDB8YWNjdF8xTHdxZUxCV05kQWR1VjJNfGZsX3Rlc3RfdXVWbmVrelRtU1RmQXM1cWZVbHExWFpG00GdxZ9wLN',
    description: null,
    quantity: 4,
    value: 27960,
    price_data: {},
    product_data: {},
    formattedValue: 'R$ 279,60',
    formattedPrice: 'R$ 69,90'
  }
}

const obj = Object.keys(items).map((key) => console.log(items[key]))
// console.log(obj)


// console.log(Object.keys(items))