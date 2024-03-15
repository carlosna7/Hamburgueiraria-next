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

		<div className='z-10 bg-amber-100 2xl:px-48 xl:px-40 lg:px-32 md:px-32 sm:px-16 px-8'>
			<div className='flex justify-between items-center text-amber-900 border-b-2 border-b-amber-900 p-1'>
				<p>baixe nosso app</p>
				<Link href="/apps" className='flex items-center bg-amber-900 p-1 rounded'>
					<span className='text-amber-100 text-2xl'><BsPhone/></span>
					<p className='text-amber-100'>aplicativo</p>
				</Link>
			</div>
		</div>


		<div className='z-10 flex justify-between items-center bg-amber-100 2xl:px-48 xl:px-40 lg:px-32 md:px-32 sm:px-16 sm:p-4 px-8 p-2 gap-4 h-full'>

			<div className='text-white bg-red-500 rounded-full cursor-pointer xl:text-5xl md:text-4xl md:p-2 text-3xl p-1 '>
				<Link href="/"><GiHamburger /></Link>
			</div>

			<ul className='flex items-center text-amber-900 xl:text-3xl sm:text-2xl sm:gap-6 text-base gap-2 '>
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
					<MdFastfood className='sm:text-3xl text-2xl' />
					{cartQuantity > 0 && (
					<div className='text-xs font-thin'>
						{formatCurrency(cartItems.reduce((total, cartItem) => {
						const item = storeItems.find(i => i.id === cartItem.id)
						
						return total + (item?.price || 0) * cartItem.quantity
						}, 0)
						)}
						{/* <p>{cartQuantity} itens</p> */}
						<p>{cartQuantity == 1 ? <>{cartQuantity} item</> : <>{cartQuantity} itens</>}</p>
					</div>
				)}
				</button>
				
			</div>

		</div>

	</>)
}

export default Navbar