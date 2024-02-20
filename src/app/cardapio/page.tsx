'use client'

import Section from '@/components/layout/Section'
import React, { useState } from 'react'
import storeItems from "../../data/items.json"
import StoreItem from '@/components/elements/StoreItem'
import FilterBox from '@/components/elements/FilterBox'
import FilterModal from '@/components/elements/FilterModal'

const Cardapio = () => {

  const [ isOpen, setIsOpen ] = useState<boolean>(false)
  const [ carneAberto, setCarneAberto ] = useState(true)
  const [ frangoAberto, setFrangoAberto ] = useState(true)
  const [ baconAberto, setBaconAberto ] = useState(true)
  const [ acompAberto, setAcompAberto ] = useState(true)
  const [ bebidaAberto, setBebidaAberto ] = useState(true)

  const openModal = () => {
    setIsOpen(true)
  }

  const carneItems = storeItems.filter(item => item.category === "carne")
  const frangoItems = storeItems.filter(item => item.category === "frango")
  const baconItems = storeItems.filter(item => item.category === "bacon")
  const acompanhamentoItems = storeItems.filter(item => item.category === "acompanhamento")
  const bebidasItems = storeItems.filter(item => item.category === "bebidas")
  

  return (
    <Section>

      <div className='flex justify-between items-start'>
        <h1 className='flex justify-center font-bold pb-24 text-5xl'>Cardápio</h1>
        <FilterBox onClick={openModal} />  
      </div>

      <FilterModal 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setCarneAberto={setCarneAberto}
        carneAberto={carneAberto}
        setFrangoAberto={setFrangoAberto}
        frangoAberto={frangoAberto}
        setBaconAberto={setBaconAberto}
        baconAberto={baconAberto}
        setAcompAberto={setAcompAberto}
        acompAberto={acompAberto}
        setBebidaAberto={setBebidaAberto}
        bebidaAberto={bebidaAberto}
      />

      {carneAberto ? (
        <> 
          <h2 className='text-3xl py-6'>Sanduíches de Carne</h2>
          <div className='grid grid-cols-4 gap-8'>
            {carneItems.map(item => (
              <div key={item.id}>
                <StoreItem {...item}/>
              </div>
            ))}
          </div>
        </>
      ) : null }
      {frangoAberto ? (
        <> 
          <h2 className='text-3xl py-6'>Sanduíches de Frango</h2>
          <div className='grid grid-cols-4 gap-8'>
            {frangoItems.map(item => (
              <div className='' key={item.id}>
                <StoreItem  {...item}/>
              </div>
            ))}
          </div>
        </>
      ) : null }
      {baconAberto ? (
        <> 
          <h2 className='text-3xl py-6'>Sanduíches com Bacon</h2>
          <div className='grid grid-cols-4 gap-8'>
            {baconItems.map(item => (
              <div key={item.id}>
                <StoreItem {...item}/>
              </div>
            ))}
          </div>  
        </>
      ) : null }
      {acompAberto ? (
        <> 
          <h2 className='text-3xl py-6'>Acompanhamentos</h2>
          <div className='grid grid-cols-4 gap-8'>
            {acompanhamentoItems.map(item => (
              <div key={item.id}>
                <StoreItem {...item}/>
              </div>
            ))}
          </div>  
        </>
      ) : null }
      {bebidaAberto ? (
        <> 
          <h2 className='text-3xl py-6'>Bebidas</h2>
          <div className='grid grid-cols-4 gap-8'>
            {bebidasItems.map(item => (
              <div key={item.id}>
                <StoreItem {...item}/>
              </div>
            ))}
          </div>
        </>
      ) : null }

    </Section>
  )
}

export default Cardapio