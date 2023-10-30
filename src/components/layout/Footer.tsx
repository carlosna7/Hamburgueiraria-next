import React from 'react'
import Section from './Section'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <Section>
      <div className='flex bottom-0 justify-between'>

        <div>
          <h3 className='font-bold text-2xl'>quem somos</h3>
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
          <h3 className='font-bold text-2xl'>Família</h3>
          <ul className='font-extralight text-gray-800 cursor-pointer'>
            <li>Lançamentos</li>
            <li>Promoções</li>
            <li>Cupons</li>
            <li>Para família</li>
          </ul>
        </div>

        <div>
          <h3 className='font-bold text-2xl'>Para você</h3>
          <ul className='font-extralight text-gray-800 cursor-pointer'>
            <li>App</li>
            <li>Delivery</li>
            <li>WhatsApp</li>
            <li>Drive-thru</li>
            <li>Lorem</li>
            <li>Intitucional</li>
            <li></li>
          </ul>
        </div>
        
        <div>
          <h3 className='font-bold text-2xl'
          >Contato</h3>
          <ul className='font-extralight text-gray-800 cursor-pointer'>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Twitter</li>
          </ul>
        </div>

      </div>

      <div>
        <div>
          <FaFacebookF/>
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>

        <div>
          <img className='h-[40px]' src="../appImg.png" alt="" />
          <img className='h-[40px]' src="../googlePlayImg.png" alt="" />
        </div>
      </div>

      <div>

        <div>
          privacidade e termos e condições
        </div>

        <div>
          logo, nome e ano
        </div>

      </div>
    </Section>
  )
}

export default Footer