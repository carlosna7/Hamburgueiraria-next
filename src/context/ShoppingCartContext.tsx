'use client'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import React, { useState, ReactNode, createContext, useContext } from 'react'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  increaseCardQuantity: (id: number) => void
  decreaseCardQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

type CartItem = {
  id: number
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext) 

export function useShoppingCart () {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider ({ children }: ShoppingCartProviderProps) {

  const [isOpen, setIsOpen] = useState(false);
  const [ cartItems, setCartItems ] = useLocalStorage<CartItem[]>("shopping-cart", [])

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  const openCart = () => {
    setIsOpen(true)
    console.log("set true open")
  }

  const closeCart = () => {
    setIsOpen(false)
    console.log("set false closed")
  }

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

  const removeFromCart = (id: number) => {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider 
      value={{ 
        getItemQuantity, 
        increaseCardQuantity, 
        decreaseCardQuantity, 
        removeFromCart, 
        cartItems, 
        cartQuantity,
        isOpen, 
        openCart, 
        closeCart
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}