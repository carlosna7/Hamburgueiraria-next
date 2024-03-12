'use client'

import { useShoppingCart } from '@/context/ShoppingCartContext'
import React from 'react'
import storeItems from '../../data/items.json'
import formatCurrency from '@/utilities/formatCurrency'

type CartItemProps = {
  id: number
  quantity: number
}

const CartItems = ({ id, quantity }: CartItemProps) => {

  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if(item == null) {
    return null
  }
  

  return (
    <div className='flex flex-col mx-8 p-4 border-b-2'>
      
      <div className='flex flex-row'>
        <img className='h-24 w-2/5 object-cover' src={item.imgUrl} alt="img" />
        <div className='flex '>
          <p>{quantity > 0 && <>{quantity}x</>} {item.name}</p>
          <p>{formatCurrency(quantity * item.price)}</p>
        </div>
        {/* <div>
          <button onClick={() => removeFromCart(item.id)} >remover</button>
        </div> */}
      </div>

    </div>
  )
}

export default CartItems