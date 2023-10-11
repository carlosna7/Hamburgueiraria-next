import Section from '@/components/layout/Section'
import React from 'react'
import storeItems from "../../data/items.json"

const About = () => {
  return (
    <Section>
      <h1 className='font-bold text-4xl'>Store</h1>
      {storeItems.map(item => (
        <div>
          {JSON.stringify(item)}
        </div>
      ))}
    </Section>
  )
}

export default About