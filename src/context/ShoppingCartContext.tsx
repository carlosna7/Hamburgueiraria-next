'use client'

import React, { ReactNode, createContext, useContext, useState } from 'react'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  increaseCardQuantity: (id: number) => void
  decreaseCardQuantity: (id: number) => void
  removeFromCart: (id: number) => void
}

type CardItem = {
  id: number
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext) 

export function useShoppingCart () {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider ({ children }: ShoppingCartProviderProps) {

  const [ cartItems, setCartItems ] = useState<CardItem[]>([])

  const getItemQuantity = (id: number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0
  } 
  const increaseCardQuantity = (id: number) => {
    setCartItems(currItems => {
      if(currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if(item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const decreaseCardQuantity = (id: number) => {
    setCartItems(currItems => {
      if(currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if(item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const removeFromCart = (id: number) => [
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  ]

  return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCardQuantity, decreaseCardQuantity, removeFromCart }} >
      {children}
    </ShoppingCartContext.Provider>
  )
}