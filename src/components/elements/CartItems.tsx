'use client'

import { useShoppingCart } from '@/context/ShoppingCartContext'
import storeItems from '../../data/items.json'
import formatCurrency from '@/utilities/formatCurrency'

type CartItemProps = {
  id: number
  quantity: number
}

const CartItems = ({ id, quantity }: CartItemProps) => {

  const { getItemQuantity, increaseCardQuantity, decreaseCardQuantity, removeFromCart } = useShoppingCart()
  const itemQuantity: number = getItemQuantity(id)

  const item = storeItems.find(i => i.id === id)
  if(item == null) {
    return null
  }
  

  return (
    <div className='flex flex-col mx-8 py-4 border-b-2'>
      
      <div className='grid grid-rows-2 grid-flow-col'>

        <img className='row-span-3 h-24 w-32 object-cover' src={item.imgUrl} alt="img" />

        <div className='col-span-2 w-full flex justify-between'>
          <p>{item.name}</p>
          <p>{formatCurrency(quantity * item.price)}</p>
        </div>

        <div className='row-span-2 col-span-2 flex justify-between'>
          <div>
            <button className='bg-red-500 rounded p-1' onClick={() => removeFromCart(item.id)} >remover</button>
          </div>

          <div className='flex flex-col gap-4 items-center'>
            
            <div className='flex flex-col gap-4 items-center'>
              <div className='flex items-center gap-4'>
                <button className='text-xl bg-lime-500 px-2 rounded-md' onClick={() => decreaseCardQuantity(id)}>-</button>
                <span>{itemQuantity}x</span>
                <button className='text-xl bg-lime-500 px-2 rounded-md' onClick={() => increaseCardQuantity(id)}>+</button>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default CartItems