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
    <div className='flex flex-col'>
      
      <div className='flex'>
        <img  className='h-24 w-2/5 object-cover' src={item.imgUrl} alt="img" />
        <div>
          <p>nome</p>
          <p>preço individuaç</p>
        </div>
        <div>
          <p>preço total por id</p>
          <p>botão remover produtos id</p>
        </div>
      </div>

      <div className='flex justify-end font-bold text-2xl'>
        <p>total geral</p>
      </div>

    </div>
  )
}

export default CartItem