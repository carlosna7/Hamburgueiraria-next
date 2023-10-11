import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex px-16 p-4 gap-4 bg-gray-400 '>

			<ul className='flex items-center justify-center gap-6'>

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

    </div>
  )
}

export default Navbar