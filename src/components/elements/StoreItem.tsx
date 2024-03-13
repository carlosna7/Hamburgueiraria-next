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
    <div className='flex flex-col w-90 border-2 border-black rounded-xl'>

		<img className='h-52 w-full object-cover rounded-xl bg-orange-200' src={imgUrl} alt="img" />
	
		<div className='flex justify-between p-4'>
			<p>{name}</p>
			<p>{formatCurrency(price)}</p>
		</div>

		<div className='flex flex-col gap-4 items-center px-4 pb-4'>
			{quantity === 0 ? (
				<button className='bg-lime-500 p-2 rounded-md' onClick={() => increaseCardQuantity(id)}>Add to card</button>
			) : 
			<div className='flex flex-col gap-4 items-center'>
				<div className='flex items-center gap-4'>
					<button className='text-3xl bg-lime-500 px-2 rounded-md' onClick={() => decreaseCardQuantity(id)}>-</button>
					<span>{quantity} in cart</span>
					<button className='text-3xl bg-lime-500 px-2 rounded-md' onClick={() => increaseCardQuantity(id)}>+</button>
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