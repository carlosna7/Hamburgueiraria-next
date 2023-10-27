'use client'

import React, { useState, useEffect } from 'react';
import Section from '@/components/layout/Section'

// mudar store para cardápio
// mudar about para Quem somos

// https://storyset.com/illustration/hamburger/bro (img hamburguer)
// https://storyset.com/illustration/order-food/bro (img aplicativo)
// https://storyset.com/illustration/location-review/bro (local)

// https://burgerking.com.br/app-bk (criar aba aplicativo)
// https://www.hamburgueriatradi.com.br (homePage)

// https://react-icons.github.io/react-icons/ (icons)

// https://uiball.com/loaders/ (loaders)

// https://www.mcdonalds.com.br (footer)

export default function Home() {
  const [imgSize, setImgSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  
  useEffect(() => {
    const handleResize = () => {
      if (imgRef.current) {
        const width: number = imgRef.current.width;
        const height: number = imgRef.current.height;
        setImgSize({ width, height });
      }
    };

    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener('resize', handleResize);

    // Chama a função de redimensionamento quando o componente é montado
    handleResize();

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // O segundo argumento [] faz com que este efeito só seja executado uma vez (no momento do montagem/desmontagem do componente)

  const imgRef = React.createRef<HTMLImageElement>();

  console.log(typeof imgSize.height)

  return (
    <Section className="relative">
      <div>
        <img
          ref={imgRef}
          className="z-0 absolute top-0 right-0 w-screen opacity-5"
          src="../home-img.png"
          alt=""
        />
      </div>
      <div className={`pt-[${imgSize.height}px]`}>
        Altura da imagem: {imgSize.height}
      </div>
    </Section>
  );
}