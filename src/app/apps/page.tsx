
import Section from '@/components/layout/Section'
import React from 'react'

import { FaCarSide, FaBurger, FaStar, FaMoneyCheckDollar } from "react-icons/fa6"
import { MdSecurityUpdateGood } from 'react-icons/md'

const Apps = () => {
  return (
  <>
  
    <Section className='relative bg-amber-900 flex lg:flex-row flex-col'>
      <div className='lg:w-1/2 w-full flex flex-col justify-between gap-4'>
        <h1 className='2xl:text-8xl lg:text-6xl md:text-7xl sm:text-6xl text-5xl text-amber-50'>Prático, rápido e cheio de benefícios</h1>
        <h2 className='2xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl text-amber-200'>Venha para o nosso APP!</h2>

        <div className='flex items-center	justify-between 2xl:text-2xl xl:text-xl lg:text-lg sm:text-xl text-base'>
          <div className='flex flex-col gap-4'>
            <p className='text-amber-50 flex items-center gap-4'> <span className='rounded-full bg-amber-200 lg:p-[9px] sm:p-[7px] p-[5px]'><FaMoneyCheckDollar className='xl:text-5xl sm:text-4xl text-xl text-amber-800'/></span> Cupons com maiores descontos</p>
            <p className='text-amber-50 flex items-center gap-4'> <span className='rounded-full bg-amber-200 lg:p-[9px] sm:p-[7px] p-[5px]'><FaCarSide className='xl:text-5xl lg:text-4xl sm:text-3xl text-xl text-amber-800'/></span> Compras no drive sem filas</p>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-amber-50 flex items-center gap-4'> <span className='rounded-full bg-amber-200 lg:p-[9px] sm:p-[7px] p-[5px]'><FaStar className='xl:text-5xl lg:text-4xl sm:text-3xl text-xl text-amber-800'/></span> Pontue no nosso APP</p>
            <p className='text-amber-50 flex items-center gap-4'> <span className='rounded-full bg-amber-200 lg:p-[9px] sm:p-[7px] p-[5px]'><FaBurger className='xl:text-5xl lg:text-4xl sm:text-3xl text-xl text-amber-800'/></span> Combos e promos</p>
          </div> 
          
        </div>
      </div>

      <div className='lg:w-1/2 w-full flex justify-center'>
        <img className='2xl:w-[560px] xl:w-[480px] lg:w-[400px] md:w-[400px] sm:w-[300px] w-[220px]' src="Order food-bro.png" alt=""/>
      </div>
    </Section>

    <section className='flex flex-col justify-between 2xl:px-96 xl:px-64 lg:px-48 md:px-32 sm:px-16 py-8 gap-8'>
      <h3 className='sm:text-4xl text-3xl flex justify-center text-center p-4'>Vantagens exclusivas do APP!</h3>
      
      <div className='grid sm:grid-cols-2 grid-cols-1 justify-items-center sm:gap-8 gap-2' >
        <div className='lg:w-[350px] lg:h-[350px] w-[280px] h-[260px] flex flex-col items-center justify-center text-center text-lg p-8 z-1 duration-500 hover:scale-90' style={{ backgroundImage: `url("/fundinho.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <FaMoneyCheckDollar className='z-10 text-7xl text-amber-900 ' />
          <p className='z-10'>Cumpons exclusivos</p>
          <p className='z-10'>Fica entre nós, mas os maiores e melhores descontos estão no nosso APP.</p>
        </div>

        <div className='lg:w-[350px] lg:h-[350px] w-[280px] h-[260px] flex flex-col items-center justify-center text-center text-lg p-8 z-1 duration-500 hover:scale-90' style={{ backgroundImage: `url("/fundinho2.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <MdSecurityUpdateGood className='z-10 text-7xl text-amber-900' />
          <p className='z-10'>Prático e Seguro</p>
          <p className='z-10'>Faça o cadastro uma única vez e use sempre sem se preocupar.</p>
        </div>
        <div className='lg:w-[350px] lg:h-[350px] w-[280px] h-[260px] flex flex-col items-center justify-center text-center text-lg p-8 z-1 duration-500 hover:scale-90' style={{ backgroundImage: `url("/fundinho.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <FaCarSide className='z-10 text-7xl text-amber-900' />
          <p className='z-10'>Retire sem filas</p>
          <p className='z-10'>Diga adeus às filas, pague pelo APP e retire no restaurante, balcão ou driver-thru.</p>
        </div>
        <div className='lg:w-[350px] lg:h-[350px] w-[280px] h-[260px] flex flex-col items-center justify-center text-center text-lg p-8 z-1 duration-500 hover:scale-90' style={{ backgroundImage: `url("/fundinho2.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <FaStar className='z-10 text-7xl text-amber-900' />
          <p className='z-10'>Pontue</p>
          <p className='z-10'>Todos os benefícios e vantagens do Clube na palma da sua mão.</p>
        </div>
      </div>
    </section>

    <Section className=' bg-amber-100 flex flex-col xl:py-0 lg:py-20 md:py-14'>

      <div className='flex justify-center'>
        <img className='xl:block hidden' src="/app/phone-removebg-preview.png" alt="" />

        <div className='flex flex-col justify-center xl:items-start xl:text-left items-center text-center gap-8'>
          <h3 className='flex sm:text-4xl text-3xl text-amber-900'>Faça um PIX ou pague como quiser</h3>
          <p className='text-lg'>Na nossam Hamburgueria, as formas de pagamento são práticas e seguras, seja pelo PIX, carteiras digitais ou seu cartão preferido.</p>

          <div className='bg-white w-full flex justify-between p-4 rounded-xl lg:flex-row flex-col gap-8'>

            <div className='flex flex-col items-center gap-2'>
              <p>Carteira digitais</p>
              <div className='flex'>
                <img className='h-6' src="/app/pix.png" alt="" />
                <img className='h-6' src="/app/mercadopago.png" alt="" />
                <img className='h-6' src="/app/ame.png" alt="" />
              </div>
            </div>

            <div className='flex flex-col items-center gap-2'>
              <p>Crédito e débito</p>
              <div className='flex'>
                <img className='h-6' src="/app/mastercard.png" alt="" />
                <img className='h-6' src="/app/elo.png" alt="" />
                <img className='h-6' src="/app/visa.png" alt="" />
              </div>
            </div>

            <div className='flex flex-col items-center gap-2'>
              <p>Vale refeição</p>
              <div className='flex'>
                <img className='h-6' src="/app/cielo.png" alt="" />
                <img className='h-6' src="/app/ticket.png" alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </Section>

  </>
  )
}

export default Apps