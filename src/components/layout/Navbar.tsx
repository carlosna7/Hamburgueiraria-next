import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-16 p-4 gap-4 bg-gray-400 '>

			<ul className='flex items-center gap-6'>
				<li>
					<Link href="/">home</Link>
				</li>
				<li>
					<Link href="/store">store</Link>
				</li>
				<li>
					<Link href="/about">about</Link>
				</li>
			</ul>
 
			<div className='relative'>
				<p className='font-bold border-2 border-black rounded-full p-3'>$ $</p>
				<div className='absolute bottom-0 right-0 bg-yellow-300 rounded-full px-2'>3</div>
			</div>

    </div>
  )
}

export default Navbar