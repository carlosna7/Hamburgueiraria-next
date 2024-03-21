// import { IoMdIceCream } from "react-icons/Io"
import { HiAdjustmentsHorizontal } from "react-icons/hi2"

type ClickItensProps = {
  onClick: any
}

const FilterBox = ({ onClick }: ClickItensProps) => {

  return (
    <div onClick={onClick} className='flex bg-red-500 p-2 lg:px-8 lg:rounded-lg rounded-3xl items-center justify-center gap-20 text-white'>
      <span className='lg:text-4xl text-3xl'>
        <HiAdjustmentsHorizontal /> 
      </span>
      <p className='text-xl lg:block hidden'>Filtro</p>
    </div>
  )
}

export default FilterBox