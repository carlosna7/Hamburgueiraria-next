'use client'

import { useShoppingCart } from '@/context/ShoppingCartContext'
import formatCurrency from '@/utilities/formatCurrency'
import storeItems from '../../data/items.json'
import { FaXmark } from "react-icons/fa6"
import CartItems from './CartItems'

const ShoppingCart = () => {

  const { isOpen, closeCart, cartItems } = useShoppingCart()
    
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} z-10 fixed top-0 right-0 h-full w-1/4 bg-white shadow-lg`}>

      <button onClick={closeCart} className='text-3xl'>
        <FaXmark />
      </button>

      <div>
        {cartItems.map(item => (
          <CartItems key={item.id} {...item }/> 
        )) }
      </div>

      <div className='flex justify-end font-bold text-2xl'>
        Total 
        {formatCurrency(cartItems.reduce((total, cartItem) => {
          const item = storeItems.find(i => i.id === cartItem.id)

          return total + (item?.price || 0) * cartItem.quantity
        }, 0)
        )}
      </div>

    </div>
  )
}

export default ShoppingCart