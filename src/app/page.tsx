import Section from "@/components/layout/Section";

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
  return (
    <Section className="relative" >
      <div>
        <img className="z-0 absolute top-0 right-0 w-screen" src="../home-img.png" alt="" />

        <div className="absolute">
          <p className='font-bold text-7xl text-gray-50'>A CASA DE HAMBURGUER</p>
          <p className='font-bold text-7xl text-gray-50'>A CASA DE HAMBURGUER</p>
        </div>
      </div>
    </Section>
  )
}