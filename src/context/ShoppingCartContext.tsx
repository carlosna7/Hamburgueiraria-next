import React, { createContext, useContext } from 'react'

const ShoppingCartContext = createContext({})

const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}

export default useShoppingCart