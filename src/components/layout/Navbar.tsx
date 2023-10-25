'use client'

import { useShoppingCart } from '@/context/ShoppingCartContext'
import Link from 'next/link'
// import React, { useState } from 'react'

const Navbar = () => {

	const { openCart, cartQuantity } = useShoppingCart()

	return (
		<div className='flex justify-between px-16 p-4 gap-4 bg-gray-400 '>

			<ul className='flex items-center gap-6'>
				<li>
					<Link href="/">home</Link>
				</li>
				<li>
					<Link href="/cardapio">store</Link>
				</li>
				<li>
					<Link href="/about">about</Link>
				</li>
			</ul>

			<div className='relative'>
				<button className='font-bold border-2 border-black rounded-full p-3' onClick={openCart}>$ $</button>
				{cartQuantity > 0 && (
					<div className='absolute bottom-0 right-0 bg-red-400 rounded-full px-2'>{cartQuantity}</div>
				)}
			</div>

		</div>
	)
}

export default Navbar