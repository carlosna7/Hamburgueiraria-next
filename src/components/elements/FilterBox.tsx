'use client'

import React from 'react'
// import { IoMdIceCream } from "react-icons/Io"
import { HiAdjustmentsHorizontal } from "react-icons/hi2"

const FilterBox = () => {
  return (
    <div className='flex bg-red-500 p-2 px-8 rounded-lg items-center justify-center gap-20 text-white'>
        <span className='text-4xl'>
            <HiAdjustmentsHorizontal /> 
        </span>
        <p className='text-xl'>Filtro</p>
    </div>
  )
}

export default FilterBox