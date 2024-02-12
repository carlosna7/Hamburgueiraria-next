import Section from '@/components/layout/Section'
import React from 'react'

import { FaCarSide, FaBurger, FaStar, FaMoneyCheckDollar } from "react-icons/fa6"

const Apps = () => {
  return (
  <>
  
    <div className='relative h-full bg-amber-800 flex '>
      <div className='w-1/2'>
        <h1 className='text-6xl text-amber-50'>Prático, rápido e cheio de benfícios?</h1>
        <h2 className='text-4xl text-amber-200'>Venha <param name="" value="" />ra nosso APP!</h2>

        <div className='flex items-center	justify-between m-4'>
          <div className='flex flex-col gap-4'>
            <p className='text-amber-50 flex items-center gap-4'> 
            <span className='rounded-full bg-amber-200 p-2'>
            <FaMoneyCheckDollar className='text-3xl text-amber-800'/></span> Cupons com maiores descontos</p>
            <p className='text-amber-50 flex items-center gap-4'> <span className='rounded-full bg-amber-200 p-2'><FaCarSide className='text-3xl text-amber-800'/></span> Compras no drive sem filas</p>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-amber-50 flex items-center gap-4'> <span className='rounded-full bg-amber-200 p-2'><FaStar className='text-3xl text-amber-800'/></span> Pontue no nosso APP</p>
            <p className='text-amber-50 flex items-center gap-4'> <span className='rounded-full bg-amber-200 p-2'><FaBurger className='text-3xl text-amber-800'/></span> Combos e promos exclusivas</p>
          </div> 
          
        </div>
      </div>

      <div className='w-1/2'>

      </div>
    </div>

    <Section>

      {/* <h1 className='flex justify-center font-bold pb-24 text-5xl'>Aplicativo</h1> */}

      <div className='flex justify-between pb-16'>

        <div className='h-[450px] w-[450px] bg-gray-400'>
          <p> 450x450</p>
        </div>
        <div className='flex flex-col gap-4 h-[450px] w-[450px]'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut nemo dolor ipsum harum quod dolorum quasi deserunt aliquid doloremque labore quisquam praesentium at, laudantium assumenda reprehenderit numquam deleniti accusantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor consequuntur nisi ipsa. Reiciendis quis sunt molestias tempore? Labore placeat porro sequi accusamus unde odio nemo distinctio suscipit cupiditate asperiores.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut nemo dolor ipsum harum quod dolorum quasi deserunt aliquid doloremque labore quisquam praesentium at, laudantium assumenda reprehenderit numquam deleniti accusantium.
          </p>
        </div>

      </div>

      <div className='flex justify-between'>
        <div className='flex flex-col gap-4 h-[450px] w-[450px]'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut nemo dolor ipsum harum quod dolorum quasi deserunt aliquid doloremque labore quisquam praesentium at, laudantium assumenda reprehenderit numquam deleniti accusantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor consequuntur nisi ipsa. Reiciendis quis sunt molestias tempore? Labore placeat porro sequi accusamus unde odio nemo distinctio suscipit cupiditate asperiores.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut nemo dolor ipsum harum quod dolorum quasi deserunt aliquid doloremque labore quisquam praesentium at, laudantium assumenda reprehenderit numquam deleniti accusantium.
          </p>
        </div>

        <div className='h-[450px] w-[450px] bg-gray-400'>
          <p> 450x450</p>
        </div>

      </div>
    </Section>

  </>
  )
}

export default Apps