import React from 'react'
import Section from './Section'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"
import Image from 'next/image'

const Footer = () => {
  return (
    <Section className='bg-gray-50 rounded-t-[120px]'>
      <div className='flex bottom-0 justify-between'>

        <div>
          <h3 className='font-bold text-2xl pb-4'>Quem somos</h3>
          <ul className='font-extralight text-gray-800 cursor-pointer'>
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
          <h3 className='font-bold text-2xl pb-4'>Família</h3>
          <ul className='font-extralight text-gray-800 cursor-pointer'>
            <li>Lançamentos</li>
            <li>Promoções</li>
            <li>Cupons</li>
            <li>Para família</li>
          </ul>
        </div>

        <div>
          <h3 className='font-bold text-2xl pb-4'>Para você</h3>
          <ul className='font-extralight text-gray-800 cursor-pointer'>
            <li>App</li>
            <li>Delivery</li>
            <li>WhatsApp</li>
            <li>Drive-thru</li>
            <li>Lorem</li>
            <li>Intitucional</li>
          </ul>
        </div>
        
        <div>
          <h3 className='font-bold text-2xl pb-4'
          >Contato</h3>
          <ul className='font-extralight text-gray-800 cursor-pointer'>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Twitter</li>
          </ul>
        </div>

      </div>

      <div className='flex justify-between pt-16 pb-4 border-gray-700 border-b-[1px] '>
        <div className='flex gap-8 text-2xl'>
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

        <div className='flex gap-4'>
          <Image className='h-[40px]' src="../appImg.png" alt="" />
          <Image className='h-[40px]' src="../googlePlayImg.png" alt="" />
        </div>
      </div>

      <div className='flex justify-between pt-4'>

        <div className='flex gap-8'>
          <p>Privacidade</p>
          <p>Termos e condições</p>
        </div>

        <div className='flex gap-8'>
          <Image src="" alt="LOGO" />
          <p>Hamburgueiraria Next, 2023</p>
        </div>

      </div>
    </Section>
  )
}

export default Footer