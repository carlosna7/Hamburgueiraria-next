import Section from '@/components/layout/Section'

// https://storyset.com/illustration/order-food/bro (img aplicativo)
// https://storyset.com/illustration/location-review/bro (local)

// https://www.hamburgueriatradi.com.br (homePage)

// https://uiball.com/loaders/ (loaders)

export default function Home() {

  return (
    <>
      <div className='relative'>

        <div className='absolute 2xl:pl-48 xl:pl-40 lg:pl-32 md:pl-32 sm:pl-16 pl-8 inset-y-1/3 '>
          <h1 className='2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white font-bold'>Hamburgueiraria</h1>
          <h1 className='2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white lg:pt-8 pt-4'>NEXT!</h1>
        </div>

        
        <img
          className="z-0 top-0 right-0 sm:w-auto sm:h-full bg-cover h-[400px] object-cover items-center"
          src="../home-img.png"
          alt=""
        />
        
        
      </div>

      <Section>

        <h2 className='flex text-center justify-center font-bold 2xl:pb-24 xl:pb-20 lg:pb-16 md:pb-16 sm:pb-8 pb-4 md:text-4xl text-3xl'>Trabalhamos para oferecer o melhor!</h2>

        <div className="lg:flex justify-between justify-items-center grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-3 sm:gap-8 gap-4">
          <div className='flex flex-col items-center 2xl:w-[360px] xl:w-[280px] lg:w-[240px] md:w-[260px] sm:w-[240px] w-[280px] bg-amber-50 text-amber-900 rounded-lg p-4 hover:rounded-3xl hover:bg-amber-900 hover:text-white duration-500'>
            <h3 className='flex justify-center text-2xl'>QUALIDADE</h3>
            <img
              className='duration-500 hover:scale-90 md:w-full sm:w-[150px] w-[120px]'
              src="/Hamburger-amico.png"
              alt=""
              width={400}
              height={400}
            />
            <p className='text-center'>Utilizamos de produtos selecinados desde sua origem, mantendo smepre um padrão de qualidade.</p>
          </div>

          <div className='flex flex-col items-center 2xl:w-[360px] xl:w-[280px] lg:w-[240px] md:w-[260px] sm:w-[240px] w-[280px] bg-amber-50 text-amber-900 rounded-lg p-4 hover:rounded-3xl hover:bg-amber-900 hover:text-white duration-500'>
            <h3 className='flex justify-center text-2xl '>SABOR</h3>
            <img
              className='duration-500 hover:scale-90 md:w-full sm:w-[150px] w-[120px]'
              src="/Hamburger-bro.png"
              alt=""
              width={400}
              height={400}
            />
            <p className='text-center'>Oferecemos uma explosão de sabores a cada mordida. Cada vez que provar será experiência nova.</p>
          </div>

          <div className='flex flex-col items-center sm:col-span-2 2xl:w-[360px] xl:w-[280px] lg:w-[240px] md:w-[260px] sm:w-[240px] w-[280px] bg-amber-50 text-amber-900 rounded-lg p-4 hover:rounded-3xl hover:bg-amber-900 hover:text-white duration-500'>
            <h3 className='flex justify-center text-2xl '>VARIEDADE</h3>
            <img
              className='duration-500 hover:scale-90 md:w-full sm:w-[150px] w-[120px]'
              src="/Hamburger-pana.png"
              alt=""
              width={400}
              height={400}
            />
            <p className='text-center'>Disponibilizamos uma Variedade de ingredites na seleção de nossos produtos para o cardápio.</p>
          </div>
        </div>
      </Section>
    </>
  )
}