import Section from '@/components/layout/Section'
import React from 'react'
import storeItems from "../../data/items.json"
import StoreItem from '@/components/layout/StoreItem'

const Store = () => {
  return (
    <Section>
      <h1 className='font-bold text-4xl'>Store</h1>
      {storeItems.map(item => (
        <div key={item.id}>
          <StoreItem {...item}/>
        </div>
      ))}
    </Section>
  )
}

export default Store