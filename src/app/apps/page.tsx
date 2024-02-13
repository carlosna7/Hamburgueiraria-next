
import React from 'react'

import { FaCarSide, FaBurger, FaStar, FaMoneyCheckDollar } from "react-icons/fa6"

const Apps = () => {
  return (
  <>
  
    <div className='relative h-full bg-amber-900 flex px-48 p-8'>
      <div className='w-1/2'>
        <h1 className='text-6xl text-amber-50'>Prático, rápido e cheio de benfícios?</h1>
        <h2 className='text-4xl text-amber-200'>Venha para o nosso APP!</h2>

        <div className='flex items-center	justify-between'>
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


    <div className='flex flex-col justify-between px-48 p-8 gap-8'>
      <h3 className='text-4xl '>Vantagens exclusivas do APP!</h3>
      
      <div className='flex justify-between'>
        <div className='bg-amber-50 texty-amber-900'>
          <FaBurger className='text-7xl text-amber-900' />
          <p>Cumpons exclusivos</p>
          <p>Fica entre nós, mas os maiores e melhores descontos estão no nosso APP.</p>
        </div>
        <div className='bg-amber-50'>
          <FaBurger className='text-7xl text-amber-900' />
          <p>Prático e Seguro</p>
          <p>Faça o cadastro Burger King uma única vez e use sempre sem se preocupar.</p>
        </div>
        <div className='bg-amber-50'>
          <FaBurger className='text-7xl text-amber-900' />
          <p>Retire sem filas</p>
          <p>Diga "adeus" às filas, pague pelo APP e retire no restaurante, balcão ou driver-thru.</p>
        </div>
        <div className='bg-amber-50'>
          <FaBurger className='text-7xl text-amber-900' />
          <p>Pontue</p>
          <p>Todos os benefícios e vantagens do Clube na palma da sua mão.</p>
        </div>
      </div>
    </div>

    <div className='bg-amber-100 flex justify-between px-48 p-8'>
      <h3 className='text-4xl text-amber-900'>Como funciona o APP?</h3>

    </div>

    <div className='flex justify-between px-48 p-8'>
      <h3 className='text-4xl text-amber-900'>Faça um PIX ou pague como quiser</h3>

    </div>

  </>
  )
}

export default Apps