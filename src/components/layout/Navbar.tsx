'use client'

import { useShoppingCart } from '@/context/ShoppingCartContext'
import Link from 'next/link'
// import React, { useState } from 'react'
import { MdFastfood } from 'react-icons/md'

const Navbar = () => {

	const { openCart, cartQuantity } = useShoppingCart()

	return (
		<div className='z-10 flex justify-between px-16 p-4 gap-4 bg-amber-100 h-20'>

			<ul className='flex items-center gap-6 text-3xl text-amber-800'>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/cardapio">Store</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/apps">App</Link>
				</li>
			</ul>

			<div className=''>
				<button className='flex rounded-full bg-red-500 text-white p-2 gap-2' onClick={openCart}>
					<MdFastfood className='text-3xl' />
					{cartQuantity > 0 && (
					<div className='text-xs font-thin '>
						<p>valor</p>
						<p>Itens {cartQuantity}</p>
					</div>
				)}
				</button>
				
			</div>

		</div>
	)
}

export default Navbar