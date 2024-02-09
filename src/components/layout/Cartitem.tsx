'use client'

import { useShoppingCart } from '@/context/ShoppingCartContext'
import React from 'react'
import storeItems from '../../data/items.json'
import formatCurrency from '@/utilities/formatCurrency'
import Image from 'next/image'

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
    <div className='flex flex-col'>
      
      <div className='flex'>
        <Image className='h-24 w-2/5 object-cover' src={item.imgUrl} alt="img" />
        <div>
          <p>{item.name} {quantity > 0 && <span>{quantity}x</span>}</p>
          <p>{formatCurrency(item.price)}</p>
        </div>
        <div>
          <p>{formatCurrency(quantity * item.price)}</p>
          <button onClick={() => removeFromCart(item.id)} >x</button>
        </div>
      </div>

    </div>
  )
}

export default CartItem