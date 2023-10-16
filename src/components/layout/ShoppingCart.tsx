'use client'

import { useShoppingCart } from '@/context/ShoppingCartContext'
import React from 'react'
import CartItem from './CartItem'

type ShoppingCartProps = {
  isOpen: boolean
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps ) => {

	const { cartItems } = useShoppingCart()
    
  return (
    <div className='fixed top-0 right-0 h-full w-1/4 bg-slate-500'>
      <p>cart</p>
      <div>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item }/> 
        )) }
      </div>
    </div>
  )
}

export default ShoppingCart