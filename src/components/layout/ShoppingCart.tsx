import { useShoppingCart } from '@/context/ShoppingCartContext'
import React from 'react'

type ShoppingCartprops = {
  isOpen: boolean
}

const ShoppingCart = ({ isOpen }: ShoppingCartprops ) => {

	const { closeCart } = useShoppingCart()
    
  return (
    <div className='fixed top-0 right-0 h-full w-1/4 bg-slate-500'>
      <div>cart</div>
    </div>
  )
}

export default ShoppingCart