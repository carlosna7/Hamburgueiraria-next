import Section from '@/components/layout/Section'

// https://storyset.com/illustration/hamburger/bro (img hamburguer)
// https://storyset.com/illustration/order-food/bro (img aplicativo)
// https://storyset.com/illustration/location-review/bro (local)

// https://www.hamburgueriatradi.com.br (homePage)

// https://uiball.com/loaders/ (loaders)

export default function Home() {

  return (<>
    <div className='relative'>

      <div className='absolute left-48 inset-y-1/3'>
        <h1 className='text-7xl text-white'>Hamburgueiraria</h1>
        <h1 className='text-7xl text-white'>NEXT!</h1>
      </div>

      <img
        className="z-0 top-0 right-0 w-screen"
        src="../home-img.png"
        alt=""
      />
      
    </div>

    <Section>

      <h2 className='flex justify-center font-bold pb-16 text-5xl'>Trabalhamos para oferecer.</h2>

      <div className="flex justify-around">
        <div className='w-[350px]'>
          <h3 className='flex justify-center text-2xl '>QUALIDADE</h3>
          <img
            src="../Hamburger-amico.png"
            alt=""
            width={350}
            height={350}
          />
          <p className='text-center'>Utilizamos de produtos selecinados desde sua origem, mantendo smepre um padrão de qualidade.</p>
        </div>

        <div className='w-[350px]'>
          <h3 className='flex justify-center text-2xl '>SABOR</h3>
          <img
            src="./Hamburger-bro.png"
            alt=""
            width={350}
            height={350}
          />
          <p className='text-center'>Oferecemos uma explosão de sabores a cada mordida. Cada vez que provar será experiência nova.</p>
        </div>

        <div className='w-[350px]'>
          <h3 className='flex justify-center text-2xl '>VARIEDADE</h3>
          <img
            src="./Hamburger-pana.png"
            alt=""
            width={350}
            height={350}
          />
          <p className='text-center'>Disponibilizamos uma Variedade de ingredites na seleção de nossos produtos para o cardápio.</p>
        </div>

      </div>
    </Section>
  </>)
}