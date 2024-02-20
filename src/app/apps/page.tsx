
import React from 'react'

import { FaCarSide, FaBurger, FaStar, FaMoneyCheckDollar } from "react-icons/fa6"
import { MdSecurityUpdateGood } from 'react-icons/md'

const Apps = () => {
  return (
  <>
  
    <section className='relative h-full bg-amber-900 flex px-48 p-8'>
      <div className='w-1/2 flex flex-col gap-8'>
        <h1 className='text-8xl text-amber-50'>Prático, rápido e cheio de benefícios</h1>
        <h2 className='text-6xl text-amber-200'>Venha para o nosso APP!</h2>

        <div className='flex items-center	justify-between text-2xl'>
          <div className='flex flex-col gap-4'>
            <p className='text-amber-50 flex items-center gap-4'> 
            <span className='rounded-full bg-amber-200 p-[10px]'>
            <FaMoneyCheckDollar className='text-5xl text-amber-800'/></span> Cupons com maiores descontos</p>
            <p className='text-amber-50 flex items-center gap-4'> <span className='rounded-full bg-amber-200 p-[10px]'><FaCarSide className='text-5xl text-amber-800'/></span> Compras no drive sem filas</p>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-amber-50 flex items-center gap-4'> <span className='rounded-full bg-amber-200 p-[10px]'><FaStar className='text-5xl text-amber-800'/></span> Pontue no nosso APP</p>
            <p className='text-amber-50 flex items-center gap-4'> <span className='rounded-full bg-amber-200 p-[10px]'><FaBurger className='text-5xl text-amber-800'/></span> Combos e promos exclusivas</p>
          </div> 
          
        </div>
      </div>

      <div className='w-1/2'>
        
      </div>
    </section>

    <section className='flex flex-col justify-between px-48 p-8 gap-8'>
      <h3 className='text-4xl '>Vantagens exclusivas do APP!</h3>
      
      <div className='flex items-center justify-between gap-8 relative' >
        <div className='w-1/4 h-[350px] flex flex-col items-center justify-center text-center text-lg p-16 z-1 duration-500 hover:scale-90' style={{ backgroundImage: `url("/fundinho.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <FaMoneyCheckDollar className='z-10 text-7xl text-amber-900 ' />
          <p className='z-10'>Cumpons exclusivos</p>
          <p className='z-10'>Fica entre nós, mas os maiores e melhores descontos estão no nosso APP.</p>
        </div>

        <div className='w-1/4 h-[350px] flex flex-col items-center justify-center text-center text-lg p-16 z-1 duration-500 hover:scale-90' style={{ backgroundImage: `url("/fundinho2.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <MdSecurityUpdateGood className='z-10 text-7xl text-amber-900' />
          <p className='z-10'>Prático e Seguro</p>
          <p className='z-10'>Faça o cadastro uma única vez e use sempre sem se preocupar.</p>
        </div>
        <div className='w-1/4 h-[350px] flex flex-col items-center justify-center text-center text-lg p-16 z-1 duration-500 hover:scale-90' style={{ backgroundImage: `url("/fundinho.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <FaCarSide className='z-10 text-7xl text-amber-900' />
          <p className='z-10'>Retire sem filas</p>
          <p className='z-10'>Diga adeus às filas, pague pelo APP e retire no restaurante, balcão ou driver-thru.</p>
        </div>
        <div className='w-1/4 h-[350px] flex flex-col items-center justify-center text-center text-lg p-16 z-1 duration-500 hover:scale-90' style={{ backgroundImage: `url("/fundinho2.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <FaStar className='z-10 text-7xl text-amber-900' />
          <p className='z-10'>Pontue</p>
          <p className='z-10'>Todos os benefícios e vantagens do Clube na palma da sua mão.</p>
        </div>
      </div>
    </section>

    <section className='bg-amber-100 flex flex-col px-48'>

      <div className='flex justify-center'>
        <img src="/app/phone-removebg-preview.png" alt="" />

        <div className='flex flex-col justify-center gap-8'>
          <h3 className='text-4xl text-amber-900'>Faça um PIX ou pague como quiser</h3>
          <p>Na nossam Hamburgueria, as formas de pagamento são práticas e seguras, seja pelo PIX, carteiras digitais ou seu cartão preferido.</p>

          <div className='bg-white flex justify-between p-4 rounded-xl'>

            <div>
              <p>Carteira digitais</p>
              <div className='flex pt-2'>
                <img className='h-6' src="/app/pix.png" alt="" />
                <img className='h-6' src="/app/mercadopago.png" alt="" />
                <img className='h-6' src="/app/ame.png" alt="" />
              </div>
            </div>

            <div>
              <p>Crédito e débito</p>
              <div className='flex pt-2'>
                <img className='h-6' src="/app/mastercard.png" alt="" />
                <img className='h-6' src="/app/elo.png" alt="" />
                <img className='h-6' src="/app/visa.png" alt="" />
              </div>
            </div>

            <div>
              <p>Vale refeição</p>
              <div className='flex pt-2'>
                <img className='h-6' src="/app/cielo.png" alt="" />
                <img className='h-6' src="/app/ticket.png" alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

  </>
  )
}

export default Apps