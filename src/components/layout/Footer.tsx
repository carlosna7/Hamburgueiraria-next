'use client'

import React, { useState } from 'react'
import Section from './Section'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPlus  } from "react-icons/fa"

const Footer = () => {

  const [ optOneState, setOptOneState ] = useState(true) 
  const [ optTwoState, setOptTwoState ] = useState(true) 
  const [ optThreeState, setOptThreeState ] = useState(true) 
  const [ optFourState, setOptFourState ] = useState(true) 

  const toggleState = (setState: React.Dispatch<React.SetStateAction<boolean>>) => {
    setState((prev) => !prev)
  }

  return (
    <Section className='bg-gray-100 sm:rounded-t-[120px] rounded-t-[80px] py-8'>
      <div className='flex bottom-0 justify-between md:flex-row flex-col '>

        <div>
          <div className='flex items-center justify-between pb-4'>
            <h3 className='font-bold text-2xl'>Quem somos</h3>
            <div className='md:hidden block' onClick={() => {toggleState(setOptOneState)}} >
              <FaPlus />
            </div>
          </div>

          <ul className={`font-extralight pb-4 text-gray-800 cursor-pointer ${optOneState ? 'hidden' : 'block'} md:block `}>
            <li >Intitucional</li>
            <li>Franquias</li>
            <li>Trabalhe conosco</li>
            <li>privacidade</li>
            <li>Termos</li>
            <li>História</li>
            <li>Corporação</li>
          </ul> 
          
        </div>

        <div>
          <div className='flex items-center justify-between pb-4'>
            <h3 className='font-bold text-2xl'>Família</h3>
            <div className='md:hidden block' onClick={() => {toggleState(setOptTwoState)}} >
              <FaPlus />
            </div>
          </div>
          <ul className={`font-extralight pb-4 text-gray-800 cursor-pointer ${optTwoState ? 'hidden' : 'block'} md:block `}>
            <li>Lançamentos</li>
            <li>Promoções</li>
            <li>Cupons</li>
            <li>Para família</li>
          </ul>
        </div>

        <div>
          <div className='flex items-center justify-between pb-4'>
            <h3 className='font-bold text-2xl'>Para você</h3>
            <div className='md:hidden block' onClick={() => {toggleState(setOptThreeState)}} >
              <FaPlus />
            </div>
          </div>
          <ul className={`font-extralight pb-4 text-gray-800 cursor-pointer ${optThreeState ? 'hidden' : 'block'} md:block `}>
            <li>App</li>
            <li>Delivery</li>
            <li>WhatsApp</li>
            <li>Drive-thru</li>
            <li>Lorem</li>
            <li>Intitucional</li>
          </ul>
        </div>
        
        <div>
          <div className='flex items-center justify-between pb-4'>
            <h3 className='font-bold text-2xl'>Contato</h3>
            <div className='md:hidden block' onClick={() => {toggleState(setOptFourState)}} >
              <FaPlus />
            </div>
          </div>
          <ul className={`font-extralight pb-4 text-gray-800 cursor-pointer ${optFourState ? 'hidden' : 'block'} md:block `}>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Twitter</li>
          </ul>
        </div>

      </div>

      <div className='flex border-gray-700 border-b-[1px] gap-4 lg:flex-row flex-col justify-between p-4'>
        <div className='flex justify-center gap-8 lg:text-2xl text-xl'>
          <div className='rounded-full p-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white'>
            <FaFacebookF />
          </div>
          <div className='rounded-full p-2 border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white'>
            <FaTwitter />
          </div>
          <div className='rounded-full p-2 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'>
            <FaInstagram />
          </div>
          <div className='rounded-full p-2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'>
            <FaYoutube />
          </div>
        </div>

        <div className='flex justify-between gap-4 lg:px-0 sm:px-8 px-0 '>
          <img className='h-[40px]' src="../appImg.png" alt="" />
          <img className='h-[40px]' src="../googlePlayImg.png" alt="" />
        </div>
      </div>

      <div className='flex items-center justify-between pt-4 lg:flex-row sm:text-base text-xs flex-col'>

        <div className='flex gap-8'>
          <p>Privacidade</p>
          <p>Termos e condições</p>
        </div>

        <div className='flex gap-8'>
          <img src="" alt="LOGO" />
          <p>Hamburgueiraria Next, 2023</p>
        </div>

      </div>
    </Section>
  )
}

export default Footer