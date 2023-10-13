'use client'
import { useShoppingCart } from '@/context/ShoppingCartContext'
import formatCurrency from '@/utilities/formatCurrency'
import React from 'react'

type StoreItemProps = {
	id: number
	name: string
	price: number
	imgUrl: string
}

const StoreItem = ({id, name, price, imgUrl }: StoreItemProps) => {

	const { getItemQuantity, increaseCardQuantity, decreaseCardQuantity, removeFromCart } = useShoppingCart()
	const quantity: number = getItemQuantity(id)

  return (
    <div className='flex flex-col w-96'>

			<img className='h-52 w-full object-cover' src={imgUrl} alt="img" />
        
			<div className='flex justify-between'>
				<p>{name}</p>
				<p>{formatCurrency(price)}</p>
			</div>

			<div className='flex flex-col gap-4 items-center'>
				{quantity === 0 ? (
					<button className='bg-blue-500 p-2 rounded-md' onClick={() => increaseCardQuantity(id)}>Add to card</button>
				) : 
				<div className='flex flex-col gap-2 items-center'>
					 <div className='flex items-center'>
						<button className='text-3xl bg-blue-500 px-2 rounded-md' onClick={() => decreaseCardQuantity(id)}>-</button>
						<span>{quantity} in cart</span>
						<button className='text-3xl bg-blue-500 px-2 rounded-md' onClick={() => increaseCardQuantity(id)}>+</button>
					 </div>
					 <div>
					 	<button className='bg-red-500 p-2 rounded-md' onClick={() => removeFromCart(id)}>Remove</button>
					 </div>

				</div>}
			</div>
        
    </div>
  )
}

export default StoreItem