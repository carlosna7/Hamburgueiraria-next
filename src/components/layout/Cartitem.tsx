'use client'

import { useShoppingCart } from '@/context/ShoppingCartContext'
import React from 'react'
import storeItems from '../../data/items.json'

type CartItemProps = {
  id: number
  quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {

  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if(item == null) {
    return null
  }
  

  return (
    <div>CartItem</div>
  )
}

export default CartItem