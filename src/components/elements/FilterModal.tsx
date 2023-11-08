import React from 'react'
import { FaXmark, FaBurger, FaBacon, } from "react-icons/fa6"
import { BsCupStraw } from "react-icons/bs"
import { GiChickenLeg, GiNachos } from "react-icons/gi"

interface TModal {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

const FilterModal = ({ isOpen, setIsOpen }: TModal) => {

	const closeModal = () => {
		console.log("fechado")
		setIsOpen(!isOpen)
	}

	if(isOpen) {
		return (
			<div className='fixed rounded inset-1/2 translate-x-[-50%] translate-y-[-50%] h-full w-full'>
				<div className='bg-black opacity-40 h-full w-full absolute'></div>

				<div className='absolute bg-white w-[700px] h-[450px] inset-1/2 translate-x-[-50%] translate-y-[-50%] text-amber-900 rounded-xl'>

					<div>
						<h3 className='flex text-2xl justify-center pt-4'>Categorias</h3>
						<button onClick={closeModal} className='absolute text-3xl right-4 top-4'>
							<FaXmark />
						</button>
					</div>

					<div>
						<div>
							<p>Sanduíche de Carne</p>
							<FaBurger />
						</div>
						<div>
							<p>Sansuíche de Frango</p>
							<GiChickenLeg />
						</div>
						<div>
							<p>Sanduíche com Bacon</p>
							<FaBacon />
						</div>
						<div>
							<p>Acompanhamentos</p>
							<GiNachos />
						</div>
						<div>
							<p>Bebidas</p>
							<BsCupStraw />
						</div>
					</div>

					<div className='flex items-end'>
						<button onClick={closeModal} className=' bg-red-500 text-white py-2 px-24 rounded text-xl'>Filtrar</button>
					</div>
				</div>
			</div>
		)
	}
	
}

export default FilterModal