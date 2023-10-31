import Section from '@/components/layout/Section'
import React from 'react'
import storeItems from "../../data/items.json"
import StoreItem from '@/components/layout/StoreItem'

// https://www.burgerking.com.br/cardapio 
// copiar grid e mudar alguns nomes

//mudar para cardápio

const Cardapio = () => {
  return (
    <Section>
      <h1 className='font-bold pb-16 text-4xl'>Cardápio</h1>
      <div className='grid grid-cols-4'>
        {storeItems.map(item => (
          <div className='' key={item.id}>
            <StoreItem {...item}/>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Cardapio