'use client'

import { useShoppingCart } from '@/context/ShoppingCartContext'
import React from 'react'
import CartItem from './CartItem'
import formatCurrency from '@/utilities/formatCurrency'
import storeItems from '../../data/items.json'


type ShoppingCartProps = {
  isOpen: boolean
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps ) => {

  const customClass = isOpen ? "hidden" : "block"

	const { cartItems } = useShoppingCart()
    
  return (
    <div className={`${customClass} fixed top-0 right-0 h-full w-1/4 bg-slate-500`}>
      <p >cart</p>
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