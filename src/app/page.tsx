'use client'

import React, { useState } from 'react';
import Section from '@/components/layout/Section'

// https://storyset.com/illustration/hamburger/bro (img hamburguer)
// https://storyset.com/illustration/order-food/bro (img aplicativo)
// https://storyset.com/illustration/location-review/bro (local)

// https://www.hamburgueriatradi.com.br (homePage)

// https://uiball.com/loaders/ (loaders)

export default function Home() {

  return (<>
    <img
      className="z-0 top-0 right-0 w-screen"
      src="../home-img.png"
      alt=""
    />

    <Section className="relative">
      <div className={`pt-3/5`}>
        Altura da imagem: 
      </div>
    </Section>
  </>)
}