import { useShoppingCart } from '@/context/ShoppingCartContext'
import React from 'react'

const ShoppingCart = () => {

	const { cartCLose } = useShoppingCart()
    
  return (
    <div className='w-96 h-96 bg-red-200'></div>
  )
}

export default ShoppingCart