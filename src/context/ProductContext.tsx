import { createContext, ReactNode, useState } from "react";

interface ProductData {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
}

interface ProductContextType {
  productCart: ProductData[]  
  setProductCart: (products: ProductData[]) => void
}

interface ProductProviderProps {
  children: ReactNode
}

export const ProductContext = createContext({} as ProductContextType)

export function ProductProvider({ children }: ProductProviderProps) {
  const [productCart, setProductCart] = useState<ProductData[]>([])

  return ( 
    <ProductContext.Provider value={ {productCart, setProductCart} }>
      {children}
    </ProductContext.Provider>
  )
}