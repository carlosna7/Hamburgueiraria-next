'use client'

import { useShoppingCart } from '@/context/ShoppingCartContext'
// import React, { useState } from 'react'
import CartItem from './CartItem'
import formatCurrency from '@/utilities/formatCurrency'
import storeItems from '../../data/items.json'

const ShoppingCart = () => {

  // const [ isOpen, setIsOpen ]  = useState(false)

  // const closeCart = () => {
  //   setIsOpen(true)
  //   console.log("set false")
  // }
  const { isOpen, closeCart, cartItems } = useShoppingCart()
    
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} fixed top-0 right-0 h-full w-1/4 bg-slate-500`}>
      <p >cart</p>
      <button onClick={closeCart}>x</button>
      <div>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item }/> 
        )) }
      </div>
      <div className='flex justify-end font-bold text-2xl'>
        Total {formatCurrency(cartItems.reduce((total, cartItem) => {
           const item = storeItems.find(i => i.id === cartItem.id)
           return total + (item?.price || 0) * cartItem.quantity
        }, 0)
        )}
      </div>

    </div>
  )
}

export default ShoppingCart