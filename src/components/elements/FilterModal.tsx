import React from 'react'
import { FaXmark, FaBurger, FaBacon, FaCheck  } from 'react-icons/fa6'
import { BsCupStraw } from 'react-icons/bs'
import { GiChickenLeg, GiConsoleController, GiNachos } from 'react-icons/gi'

interface TModal {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setCarneAberto: React.Dispatch<React.SetStateAction<boolean>>
  carneAberto: boolean
  setFrangoAberto: React.Dispatch<React.SetStateAction<boolean>>
  frangoAberto: boolean
  setBaconAberto: React.Dispatch<React.SetStateAction<boolean>>
  baconAberto: boolean
  setAcompAberto: React.Dispatch<React.SetStateAction<boolean>>
  acompAberto: boolean
  setBebidaAberto: React.Dispatch<React.SetStateAction<boolean>>
  bebidaAberto: boolean
}

const FilterModal: React.FC<TModal> = ({ isOpen, setIsOpen, setCarneAberto, setFrangoAberto, setBaconAberto, setAcompAberto, setBebidaAberto }) => {

  const closeModal = () => {
    setIsOpen((prev) => !prev)
  }

  const toggleState = (setState: React.Dispatch<React.SetStateAction<boolean>>) => {
    setState((prev) => !prev)
  }

  return isOpen ? (
    <div className='fixed rounded inset-1/2 translate-x-[-50%] translate-y-[-50%] h-full w-full'>
      <div className='bg-black opacity-40 h-full w-full absolute'></div>

      <div className='absolute bg-white w-[700px] h-[450px] inset-1/2 translate-x-[-50%] translate-y-[-50%] text-amber-900 rounded-xl p-8'>
        <div>
          <h3 className='flex justify-center text-4xl pb-8'>Categorias</h3>
          <button
            onClick={closeModal}
            className='absolute text-3xl right-8 top-8'
          >
            <FaXmark />
          </button>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2 text-xl'>
            <div className='border-2 border-black w-6 h-6' onClick={() => toggleState(setCarneAberto)}>
              {/* {teste ? <FaCheck className='text-black' /> : <FaXmark className='text-black' />} */}
            </div>
            <p>Sanduíche de Carne</p>
            <FaBurger  />
          </div>

          <div className='flex items-center gap-2 text-xl'>
            <div className='border-2 border-black w-6 h-6' onClick={() => toggleState(setFrangoAberto)}>
              {/* {teste ? <FaCheck className='text-black' /> : <FaXmark className='text-black' />} */}
            </div>
            <p>Sanduíche de Frango</p>
            <GiChickenLeg />
          </div>

          <div className='flex items-center gap-2 text-xl'>
            <div className='border-2 border-black w-6 h-6' onClick={() => toggleState(setBaconAberto)}>
              {/* {teste ? <FaCheck className='text-black' /> : <FaXmark className='text-black' />} */}
            </div>
            <p>Sanduíche com Bacon</p>
            <FaBacon />
          </div>

          <div className='flex items-center gap-2 text-xl'>
            <div className='border-2 border-black w-6 h-6' onClick={() => toggleState(setAcompAberto)}>
              {/* {teste ? <FaCheck className='text-black' /> : <FaXmark className='text-black' />} */}
            </div>
            <p>Acompanhamentos</p>
            <GiNachos />
          </div>

          <div className='flex items-center gap-2 text-xl'>
            <div className='border-2 border-black w-6 h-6' onClick={() => toggleState(setBebidaAberto)}>
              {/* {teste ? <FaCheck className='text-black' /> : <FaXmark className='text-black' />} */}
            </div>
            <p>Bebidas</p>
            <BsCupStraw />
          </div>
        </div>

        <div className='flex items-end pt-8'>
          <button
            onClick={closeModal}
            className=' bg-red-500 text-white py-2 px-24 rounded text-xl'
          >
            Filtrar
          </button>
        </div>
      </div>
    </div>
  ) : null
}

export default FilterModal;
