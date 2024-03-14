'use client'

import Link from 'next/link'
import { useShoppingCart } from '@/context/ShoppingCartContext'
import formatCurrency from '@/utilities/formatCurrency'
import storeItems from '../../data/items.json'

// import React, { useState } from 'react'
import { MdFastfood } from 'react-icons/md'
import { GiHamburger } from 'react-icons/gi'
import { BsPhone } from 'react-icons/bs'

const Navbar = () => {

	const { openCart, cartQuantity, cartItems } = useShoppingCart()

	return (<>

		<div className='z-10 2xl:px-48 xl:px-40 lg:px-32 md:px-32 sm:px-16 px-8 bg-amber-100 '>
			<div className='flex justify-between items-center text-amber-900 border-b-2 border-b-amber-900 p-1'>
				<p>baixe nosso app</p>
				<Link href="/apps" className='flex items-center bg-amber-900 p-1 rounded'>
					<span className='text-amber-100 text-2xl'><BsPhone/></span>
					<p className='text-amber-100'>aplicativo</p>
				</Link>
			</div>
		</div>


		<div className='z-10 flex justify-between items-center 2xl:px-48 xl:px-40 lg:px-32 md:px-32 sm:px-16 px-8 p-4 gap-4 bg-amber-100 h-20'>

			<div className='xl:text-5xl md:text-4xl text-lg text-white bg-red-500 md:p-2 p-1 rounded-full cursor-pointer'>
				<Link href="/"><GiHamburger /></Link>
			</div>

			<ul className='flex items-center gap-6 xl:text-3xl md:text-2xl text-amber-900'>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/cardapio">Menu</Link>
				</li>
				<li>
					<Link href="/apps">App</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
			</ul>

			<div className='flex w-[120px] justify-end'>
				<button className='flex rounded-full bg-red-500 text-white p-2 gap-2' onClick={openCart}>
					<MdFastfood className='text-3xl' />
					{cartQuantity > 0 && (
					<div className='text-xs font-thin '>
						{formatCurrency(cartItems.reduce((total, cartItem) => {
						const item = storeItems.find(i => i.id === cartItem.id)
						
						return total + (item?.price || 0) * cartItem.quantity
						}, 0)
						)}
						<p>Itens {cartQuantity}</p>
					</div>
				)}
				</button>
				
			</div>

		</div>

	</>)
}

export default Navbar