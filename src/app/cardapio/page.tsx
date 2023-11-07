import Section from '@/components/layout/Section'
import React from 'react'
import storeItems from "../../data/items.json"
import StoreItem from '@/components/elements/StoreItem'
import FilterBox from '@/components/elements/FilterBox'
// https://www.burgerking.com.br/cardapio 
// copiar grid e mudar alguns nomes

//mudar para cardápio

const Cardapio = () => {

  const carneItems = storeItems.filter(item => item.category === "carne")
  const frangoItems = storeItems.filter(item => item.category === "frango")
  const baconItems = storeItems.filter(item => item.category === "bacon")
  const acompanhamentoItems = storeItems.filter(item => item.category === "acompanhamento")
  const bebidasItems = storeItems.filter(item => item.category === "bebidas")
  

  return (
    <Section>

      <div className='flex justify-between items-start'>
        <h1 className='font-bold pb-16 text-4xl'>Cardápio</h1>
        <FilterBox />   
        
        
        {/* criar um modal que abre ao apertar o botão, nele será possível escolher as opções de filtros dos itens no cardápio */}

        
      </div>

      <h2 className='text-3xl'>Sanduíches de Carne</h2>
      <div className='grid grid-cols-4'>
        {carneItems.map(item => (
          <div key={item.id}>
            <StoreItem {...item}/>
          </div>
        ))}
      </div>

      <h2 className='text-3xl'>Sanduíches de Frango</h2>
      <div className='grid grid-cols-4'>
        {frangoItems.map(item => (
          <div key={item.id}>
            <StoreItem {...item}/>
          </div>
        ))}
      </div>

      <h2 className='text-3xl'>Sanduíches com Bacon</h2>
      <div className='grid grid-cols-4'>
        {baconItems.map(item => (
          <div key={item.id}>
            <StoreItem {...item}/>
          </div>
        ))}
      </div>

      <h2 className='text-3xl'>Acompanhamentos</h2>
      <div className='grid grid-cols-4'>
        {acompanhamentoItems.map(item => (
          <div key={item.id}>
            <StoreItem {...item}/>
          </div>
        ))}
      </div>

      <h2 className='text-3xl'>Bebidas</h2>
      <div className='grid grid-cols-4'>
        {bebidasItems.map(item => (
          <div key={item.id}>
            <StoreItem {...item}/>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Cardapio