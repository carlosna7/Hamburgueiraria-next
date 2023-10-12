import formatCurrency from '@/utilities/formatCurrency'
import React from 'react'

type StoreItemProps = {
	id: number
	name: string
	price: number
	imgUrl: string
}

const StoreItem = ({id, name, price, imgUrl }: StoreItemProps) => {

	const quantity: number = 2

  return (
    <div className='flex flex-col w-96'>

			<img className='h-52 w-full object-cover' src={imgUrl} alt="img" />
        
			<div className='flex justify-between'>
				<p>{name}</p>
				<p>{formatCurrency(price)}</p>
			</div>

			<div>
				{quantity === 0 ? (
					<button className='bg-blue-500 p-2 rounded-md'>Add to card</button>
				) : 
				<div className='flex gap-4 items-center'>
					 <button className='text-3xl bg-blue-500 px-2 rounded-md'>-</button>
					 <span>{quantity} in cart</span>
					 <button className='text-3xl bg-blue-500 px-2 rounded-md'>+</button>
				</div>}
			</div>
        
    </div>
  )
}

export default StoreItem